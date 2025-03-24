import { useEffect, useState } from 'react'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
    setIsLoading(false)
  }, [])

  return { isAuthenticated, setIsAuthenticated, isLoading }
}
