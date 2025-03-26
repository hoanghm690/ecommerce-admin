import { LoginFormType } from '@/pages/login'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { RoutePaths } from '@/constants'
import { useAuthContext } from '@/providers/auth'
import { toast } from 'sonner'

export function useLogin() {
  const {
    authProvider: { login, getIdentity },
    setAuthState
  } = useAuthContext()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (values: LoginFormType) => {
    try {
      setIsLoading(true)
      await login(values)
      const identity = await getIdentity()

      if (identity) {
        setAuthState(true, identity)

        const redirectPath = params.get('continue') || RoutePaths.DASHBOARD
        navigate(redirectPath, { replace: true })
      }
    } catch (_error) {
      toast.error('Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  return { handleLogin, isLoading }
}
