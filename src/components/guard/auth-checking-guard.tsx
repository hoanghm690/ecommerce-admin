import { Navigate } from 'react-router'

import { Loading } from '@/components'
import { RoutePaths } from '@/constants'
import { useAuthContext } from '@/providers'

export function AuthCheckingGuard() {
  const { authenticated, loading } = useAuthContext()

  if (loading) return <Loading />
  if (authenticated) return <Navigate to={RoutePaths.DASHBOARD} replace />
  return <Navigate to={RoutePaths.LOGIN} replace />
}
