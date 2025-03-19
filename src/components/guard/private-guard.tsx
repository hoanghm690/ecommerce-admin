import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router'

const isAuthenticated = () => {
  return localStorage.getItem('token') ? true : false
}

function PrivateGuard({ children }: PropsWithChildren) {
  return isAuthenticated() ? children : <Navigate to='/login' />
}

export default PrivateGuard
