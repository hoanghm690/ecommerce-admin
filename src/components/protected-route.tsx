import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router'

const isAuthenticated = () => {
  return localStorage.getItem('token') ? true : false
}

function ProtectedRoute({ children }: PropsWithChildren) {
  return isAuthenticated() ? children : <Navigate to='/login' />
}

export default ProtectedRoute
