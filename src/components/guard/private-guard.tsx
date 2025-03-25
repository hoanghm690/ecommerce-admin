import { useAuth } from '@/hooks/auth/use-auth'
import { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router'
import { Loading } from '../loading'
import { RoutePaths } from '@/utils/routes-constants'

function PrivateGuard({ children }: PropsWithChildren) {
  const location = useLocation()
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) return <Loading />

  if (!isAuthenticated) {
    const path = encodeURIComponent(location.pathname)
    return <Navigate to={`${RoutePaths.LOGIN}?continue=${path}`} />
  }

  return children
}

export default PrivateGuard
