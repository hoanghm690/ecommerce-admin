import { Navigate, Outlet, useLocation } from 'react-router'

import { Loading } from '@/components'
import { RoutePaths } from '@/constants'
import { useAuthContext } from '@/providers'

export function PrivateGuard() {
  const location = useLocation()
  const { authenticated, loading } = useAuthContext()

  if (loading) return <Loading />

  if (!authenticated) {
    const path = encodeURIComponent(location.pathname)
    return <Navigate to={`${RoutePaths.LOGIN}?continue=${path}`} replace />
  }

  return <Outlet />
}
