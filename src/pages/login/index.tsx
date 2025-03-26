import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { z } from 'zod'
import AppForm from '@/components/form-utils/app-form'
import ControlledInput from '@/components/form-utils/controlled-input'
import { useLogin } from '@/hooks/auth/use-login'
import { AppMessages } from '@/constants'

const loginFormSchema = z.object({
  email: z.string().min(1, { message: AppMessages.email.required }).email(AppMessages.email.invalid),
  password: z.string().min(1, {
    message: AppMessages.password.required
  })
})

export type LoginFormType = z.infer<typeof loginFormSchema>

export default function Login() {
  const { handleLogin, isLoading } = useLogin()

  return (
    <Card>
      <CardHeader className='text-center'>
        <CardTitle className='text-xl'>Welcome back</CardTitle>
      </CardHeader>
      <CardContent>
        <AppForm
          schema={loginFormSchema}
          defaultValues={{
            email: '',
            password: ''
          }}
          onSubmit={handleLogin}
          submitButtonProps={{
            loading: isLoading,
            className: 'w-full',
            children: 'Login'
          }}
        >
          <ControlledInput name='email' label='Email' placeholder='Enter email' disabled={isLoading} />
          <ControlledInput name='password' label='Password' placeholder='Enter password' disabled={isLoading} />
        </AppForm>
      </CardContent>
    </Card>
  )
}
