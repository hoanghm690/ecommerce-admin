import { User } from '@/lib/apis/users'

import { AuthProvider, LoginPayload } from './types'
import { StorageKey } from '@/constants'

export const authProvider: AuthProvider = {
  login: async (_payload: LoginPayload) => {
    // Call api login with payload in here...
    const credential = {
      access_token: 'dummy-access-token',
      refresh_token: 'dummy-refresh-token'
    }
    localStorage.setItem(StorageKey.CREDENTIAL, JSON.stringify(credential))
  },
  logout: (setAuthState?: (authenticated: boolean, user: User | null) => void) => {
    localStorage.removeItem(StorageKey.CREDENTIAL)
    setAuthState?.(false, null)
  },
  getIdentity: async () => {
    const storageString = localStorage.getItem(StorageKey.CREDENTIAL)
    if (!storageString) return null

    // const { credential } = JSON.parse(storageString)
    // const user = await usersApi.getMe()
    const user: User = {
      id: 1,
      email: 'admin@example.com',
      name: 'Admin'
    }
    return { ...user }
  }
}
