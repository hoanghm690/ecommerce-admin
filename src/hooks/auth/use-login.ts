import storage from '@/utils/storage'
import { LoginFormType } from '@/pages/login'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { RoutePaths } from '@/utils/routes-constants'

export function useLogin() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (values: LoginFormType) => {
    console.log(values)
    setIsLoading(true)
    storage.setAccessToken('dummy-access-token')
    storage.setRefreshToken('dummy-refresh-token')
    navigate(params.get('continue') || RoutePaths.DASHBOARD)
    setIsLoading(false)
  }

  return { handleLogin, isLoading }
}
