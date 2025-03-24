import { useAuth } from '@/hooks/auth/use-auth'
import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router'
import { Loading } from '../loading'

function PrivateGuard({ children }: PropsWithChildren) {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) return <Loading />
  return isAuthenticated ? children : <Navigate to='/login' />
}

export default PrivateGuard
