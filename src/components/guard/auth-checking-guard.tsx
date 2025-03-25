import { useAuth } from '@/hooks/auth/use-auth'
import { Navigate } from 'react-router'
import { Loading } from '../loading'
import { RoutePaths } from '@/utils/routes-constants'

function AuthCheckingGuard() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) return <Loading />
  if (isAuthenticated) return <Navigate to={RoutePaths.DASHBOARD} />
  return <Navigate to={RoutePaths.LOGIN} />
}

export default AuthCheckingGuard
