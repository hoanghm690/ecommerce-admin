import { Navigate, Outlet } from 'react-router'
import { Loading } from '@/components/common'
import { RoutePaths } from '@/constants'
import { useAuthContext } from '@/providers/auth'

export function PublicGuard() {
  const { authenticated, loading } = useAuthContext()

  if (loading) return <Loading />
  return authenticated ? <Navigate to={RoutePaths.DASHBOARD} replace /> : <Outlet />
}
