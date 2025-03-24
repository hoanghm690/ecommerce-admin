import appEnv from '@/config/env'
import axios from 'axios'

const axiosClient = axios.create({
  baseURL: appEnv.apiUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error?.response?.data || error.message)
    return Promise.reject(error)
  }
)

export default axiosClient
