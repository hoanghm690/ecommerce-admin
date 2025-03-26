import { User } from '@/lib/apis/users'

export type LoginPayload = {
  email: string
  password: string
}

export type AuthProvider = {
  login: (payload: LoginPayload) => Promise<void>
  logout: (setAuthState?: (authenticated: boolean, user: User | null) => void) => void
  getIdentity: () => Promise<User | null>
}

export type AuthContextType = {
  authProvider: AuthProvider
  loading: boolean
  authenticated: boolean
  currentUser: User | null
  error?: Error
  setAuthState: (authenticated: boolean, identity: User | null) => void
  refreshAuth: () => Promise<void>
}
