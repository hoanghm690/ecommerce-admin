import { useNavigate } from 'react-router'
import { useAuth } from './use-auth'
import appRoutes from '@/config/routes'
import storage from '@/lib/storage'

export function useLogout() {
  const navigate = useNavigate()
  const { setIsAuthenticated } = useAuth()

  const handleLogout = () => {
    storage.clearAuth()
    setIsAuthenticated(false)
    navigate(appRoutes.login)
  }

  return {
    handleLogout
  }
}
