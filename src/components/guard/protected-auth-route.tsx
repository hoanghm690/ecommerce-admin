import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router'

const isAuthenticated = () => {
  return localStorage.getItem('token') ? true : false
}

function ProtectedAuthRoute({ children }: PropsWithChildren) {
  return isAuthenticated() ? <Navigate to='/dashboard' /> : children
}

export default ProtectedAuthRoute
