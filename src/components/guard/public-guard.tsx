import { Navigate, Outlet } from 'react-router'
import { Loading } from '../loading'
import { RoutePaths } from '@/constants'
import { useAuthContext } from '@/providers/auth'

function PublicGuard() {
  const { authenticated, loading } = useAuthContext()

  if (loading) return <Loading />
  return authenticated ? <Navigate to={RoutePaths.DASHBOARD} replace /> : <Outlet />
}

export default PublicGuard
