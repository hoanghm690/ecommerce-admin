import { useNavigate } from 'react-router'
import { useAuth } from './use-auth'
import storage from '@/utils/storage'
import { RoutePaths } from '@/utils/routes-constants'

export function useLogout() {
  const navigate = useNavigate()
  const { setIsAuthenticated } = useAuth()

  const handleLogout = () => {
    storage.clearAuth()
    setIsAuthenticated(false)
    navigate(RoutePaths.LOGIN)
  }

  return {
    handleLogout
  }
}
