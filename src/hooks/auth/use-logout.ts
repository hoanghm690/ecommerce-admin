import { useAuthContext } from '@/providers/auth'

export function useLogout() {
  const {
    authProvider: { logout },
    setAuthState
  } = useAuthContext()

  const handleLogout = () => {
    logout(setAuthState)
  }

  return {
    handleLogout
  }
}
