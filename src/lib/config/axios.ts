import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

import { EnvConfig, RoutePaths, StorageKey } from '@/constants'

export type Params = Record<string, unknown>
export type HttpRequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'
class AxiosResponseHandler {
  public success<T>(response: AxiosResponse): T {
    const responseData = response.data

    // Check if the response includes pagination data
    if (responseData && responseData.data && responseData.pagination) {
      // Return the full response with data and pagination for PaginationResponse type
      return {
        data: responseData.data,
        pagination: responseData.pagination
      } as T
    }

    return responseData.data
  }

  public error(error: AxiosError): never {
    if (error.response?.status === 500) {
      throw new Error('Something went wrong. Please try again later.')
    }
    throw error.response?.data || error
  }
}

export class HttpClient {
  public axiosInstance: AxiosInstance
  private handler: AxiosResponseHandler

  constructor(baseRoute: string) {
    this.axiosInstance = axios.create({
      baseURL: `${EnvConfig.API_URL}${baseRoute}`,
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.setupInterceptors()
    this.handler = new AxiosResponseHandler()
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const credentialsString = localStorage.getItem(StorageKey.CREDENTIAL)
        if (credentialsString) {
          const credentials = JSON.parse(credentialsString)

          if (credentials?.access_token) {
            config.headers.Authorization = `Bearer ${credentials.access_token}`
          }
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // Response interceptor
    this.axiosInstance.interceptors.response.use((response) => response, this.handleResponseError.bind(this))
  }

  private handleResponseError(error: AxiosError) {
    if (error.response?.status === 401) {
      // Clear credentials
      localStorage.removeItem(StorageKey.CREDENTIAL)

      // Store current location for redirect after login
      const currentLocation = window.location.pathname + window.location.search
      if (currentLocation !== RoutePaths.LOGIN) {
        const path = encodeURIComponent(currentLocation)

        // Force a full page reload to /login to ensure clean state
        window.location.replace(`${RoutePaths.LOGIN}?continue=${path}`)
      }
    }
    return Promise.reject(error)
  }

  private async request<T>(
    method: HttpRequestMethod,
    uri: string,
    params?: Params | FormData,
    config: Record<string, unknown> = {}
  ): Promise<T> {
    try {
      const response = await this.axiosInstance[method](uri, params, config)
      return this.handler.success<T>(response)
    } catch (error) {
      throw this.handler.error(error as AxiosError)
    }
  }

  public async get<T>(uri: string): Promise<T> {
    return this.request<T>('get', uri)
  }

  public async post<T>(uri: string, data?: Params | FormData): Promise<T> {
    return this.request<T>('post', uri, data)
  }

  public async put<T>(uri: string, data?: Params): Promise<T> {
    return this.request<T>('put', uri, data)
  }

  public async patch<T>(uri: string, data?: Params): Promise<T> {
    return this.request<T>('patch', uri, data)
  }

  public async delete<T>(uri: string): Promise<T> {
    return this.request<T>('delete', uri)
  }
}
