import { useNavigate } from 'react-router'
import { useAuth } from './use-auth'

export function useLogout() {
  const navigate = useNavigate()
  const { setIsAuthenticated } = useAuth()

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    navigate('/login')
  }

  return {
    handleLogout
  }
}
