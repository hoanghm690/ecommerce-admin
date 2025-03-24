import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useNavigate, useSearchParams } from 'react-router'
import { LoadingButton } from '../loading-button'
import appRoutes from '@/config/routes'
import storage from '@/lib/storage'

export function LoginForm() {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    storage.setAccessToken('dummy-access-token')
    storage.setRefreshToken('dummy-refresh-token')
    navigate(params.get('continue') || appRoutes.dashboard)
  }

  return (
    <Card>
      <CardHeader className='text-center'>
        <CardTitle className='text-xl'>Welcome back</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className='grid gap-6'>
            <div className='grid gap-3'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='m@example.com' required />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' required />
            </div>
            <LoadingButton type='submit' className='w-full' loading={false}>
              Login
            </LoadingButton>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
