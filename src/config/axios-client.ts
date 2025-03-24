import appEnv from '@/config/env'
import storage from '@/lib/storage'
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
  baseURL: appEnv.apiUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: (params) => queryString.stringify(params)
})

let isRefreshing = false
let failedQueue: { resolve: (value: unknown) => void; reject: (reason?: unknown) => void }[] = []

// Function to process the queue after refresh token request completes
const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(token)
    } else {
      prom.reject(error)
    }
  })

  failedQueue = []
}

// Request Interceptor: Attach the access token to the request headers
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = storage.getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response Interceptor: Handle errors & refresh token if necessary
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config

    // Handle 401 (Unauthorized)
    if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
      if (isRefreshing) {
        // If already refreshing, queue the request
        try {
          const token = await new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject })
          })
          originalRequest.headers.Authorization = `Bearer ${token}`
          return await axiosClient(originalRequest)
        } catch (err) {
          return await Promise.reject(err)
        }
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        const refreshToken = storage.getRefreshToken()
        if (!refreshToken) {
          throw new Error('No refresh token available')
        }

        const { data } = await axios.post(`${appEnv.apiUrl}/auth/refresh`, { refreshToken })

        storage.setAccessToken(data.accessToken)
        storage.setRefreshToken(data.refreshToken)

        processQueue(null, data.accessToken)

        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
        return axiosClient(originalRequest)
      } catch (err) {
        processQueue(err, null)
        storage.clearAuth() // Clear authentication if refresh token fails
        return Promise.reject(err)
      } finally {
        isRefreshing = false
      }
    }

    // Handle 403 (Forbidden) → User does not have permission
    if (error.response?.status === 403) {
      console.error('Access Denied: You do not have permission to perform this action.')
    }

    // Handle 500 (Internal Server Error) → Server-side issue
    if (error.response?.status === 500) {
      console.error('Server Error: Please try again later.')
    }

    return Promise.reject(error)
  }
)

export default axiosClient
