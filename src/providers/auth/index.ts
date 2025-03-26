import { createContext, useContext } from 'react'
import { AuthContextType } from './types'

export * from './context'
export * from './types'
export * from './provider'

export const AuthContext = createContext<AuthContextType | null>(null)
export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthContextProvider')
  }
  return context
}
