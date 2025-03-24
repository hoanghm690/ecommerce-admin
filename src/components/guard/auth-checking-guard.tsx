import { useAuth } from '@/hooks/auth/use-auth'
import { Navigate } from 'react-router'
import { Loading } from '../loading'
import appRoutes from '@/config/routes'

function AuthCheckingGuard() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) return <Loading />
  if (isAuthenticated) return <Navigate to={appRoutes.dashboard} />
  return <Navigate to={appRoutes.login} />
}

export default AuthCheckingGuard
