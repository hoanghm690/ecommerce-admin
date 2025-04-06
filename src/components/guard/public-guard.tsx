import { Navigate, Outlet } from 'react-router'

import { Loading } from '@/components'
import { RoutePaths } from '@/constants'
import { useAuthContext } from '@/providers'

export function PublicGuard() {
  const { authenticated, loading } = useAuthContext()

  if (loading) return <Loading />
  return authenticated ? <Navigate to={RoutePaths.DASHBOARD} replace /> : <Outlet />
}
