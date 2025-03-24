import { useAuth } from '@/hooks/auth/use-auth'
import { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router'
import { Loading } from '../loading'
import appRoutes from '@/config/routes'

function PrivateGuard({ children }: PropsWithChildren) {
  const location = useLocation()
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) return <Loading />

  if (!isAuthenticated) {
    const path = encodeURIComponent(location.pathname)
    return <Navigate to={`${appRoutes.login}?continue=${path}`} />
  }

  return children
}

export default PrivateGuard
