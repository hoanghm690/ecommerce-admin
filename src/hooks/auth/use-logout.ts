import { useNavigate } from 'react-router'
import { useAuth } from './use-auth'
import appRoutes from '@/config/routes'

export function useLogout() {
  const navigate = useNavigate()
  const { setIsAuthenticated } = useAuth()

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    navigate(appRoutes.login)
  }

  return {
    handleLogout
  }
}
