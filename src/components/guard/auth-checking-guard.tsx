import { useAuth } from '@/hooks/auth/use-auth'
import { Navigate } from 'react-router'
import { Loading } from '../loading'

function AuthCheckingGuard() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) return <Loading />
  if (isAuthenticated) return <Navigate to='/dashboard' />
  return <Navigate to='/login' />
}

export default AuthCheckingGuard
