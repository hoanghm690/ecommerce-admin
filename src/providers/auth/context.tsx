import React, { useCallback, useEffect, useState } from 'react'
import { User } from '@/lib/apis/users'
import { AuthContext, AuthProvider } from '.'
import { StorageKey } from '@/constants'

const AuthContextProvider: React.FC<{
  authProvider: AuthProvider
  children: React.ReactNode
}> = ({ authProvider, children }) => {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(() => {
    return !!localStorage.getItem(StorageKey.CREDENTIAL)
  })
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [error, setError] = useState<Error | undefined>()

  const setAuthState = useCallback((authenticated: boolean, user: User | null) => {
    setAuthenticated(authenticated)
    setCurrentUser(user)
  }, [])

  const refreshAuth = useCallback(async () => {
    if (!authenticated) {
      setAuthState(false, null)
      setLoading(false)
      return
    }
    try {
      setLoading(true)
      const identity = await authProvider.getIdentity()
      if (identity) {
        setAuthState(true, identity)
      } else {
        setAuthState(false, null)
        authProvider.logout()
      }
    } catch (error) {
      setError(error as Error)
      setAuthState(false, null)
      authProvider.logout()
    } finally {
      setLoading(false)
    }
  }, [authenticated, authProvider, setAuthState])

  useEffect(() => {
    refreshAuth()
  }, [refreshAuth])

  const contextValue = {
    authProvider,
    loading,
    authenticated,
    currentUser,
    error,
    setAuthState,
    refreshAuth
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export { AuthContextProvider }
