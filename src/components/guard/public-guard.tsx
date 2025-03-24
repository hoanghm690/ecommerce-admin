import { useAuth } from '@/hooks/auth/use-auth'
import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router'
import { Loading } from '../loading'

function PublicGuard({ children }: PropsWithChildren) {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) return <Loading />
  return isAuthenticated ? <Navigate to='/dashboard' /> : children
}

export default PublicGuard
