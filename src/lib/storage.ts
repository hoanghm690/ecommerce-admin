import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/config/const'

const storage = {
  getAccessToken: () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
  },
  setAccessToken: (token: string) => {
    return localStorage.setItem(ACCESS_TOKEN_KEY, token)
  },
  getRefreshToken: () => {
    return localStorage.getItem(REFRESH_TOKEN_KEY)
  },
  setRefreshToken: (token: string) => {
    return localStorage.setItem(REFRESH_TOKEN_KEY, token)
  },
  clearAuth: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  }
}

export default storage
