import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { z } from 'zod'
import AppForm from '@/components/form-utils/app-form'
import ControlledInput from '@/components/form-utils/controlled-input'
import appMessages from '@/config/messages'
import { useLogin } from '@/hooks/auth/use-login'
import ControlledCheckboxSingle from '@/components/form-utils/controlled-checkbox-single'
import ControlledCheckboxMultiple from '@/components/form-utils/controlled-checkbox-multiple'
import ControlledRadioGroup from '@/components/form-utils/controlled-radio-group'

const items = [
  {
    id: 'recents',
    label: 'Recents'
  },
  {
    id: 'home',
    label: 'Home'
  },
  {
    id: 'applications',
    label: 'Applications'
  },
  {
    id: 'desktop',
    label: 'Desktop'
  },
  {
    id: 'downloads',
    label: 'Downloads'
  },
  {
    id: 'documents',
    label: 'Documents'
  }
]

const radioGroupOptions = [
  {
    value: 'all',
    label: 'All new messages'
  },
  {
    value: 'mentions',
    label: 'Direct messages and mentions'
  },
  {
    value: 'none',
    label: 'Nothing'
  }
]

const loginFormSchema = z.object({
  email: z.string().min(1, { message: appMessages.email.required }).email(appMessages.email.invalid),
  password: z.string().min(1, {
    message: appMessages.password.required
  }),
  checkbox: z.boolean().refine((val) => val, {
    message: appMessages.termsAndConditions.required
  }),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: appMessages.selection.required
  }),
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.'
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
          defaultValues={{ email: '', password: '', checkbox: false, items: [] }}
          onSubmit={handleLogin}
          submitButtonProps={{
            loading: isLoading,
            className: 'w-full',
            children: 'Login'
          }}
        >
          <ControlledInput name='email' label='Email' placeholder='Enter email' disabled={isLoading} />
          <ControlledInput name='password' label='Password' placeholder='Enter password' disabled={isLoading} />
          <ControlledCheckboxSingle
            name='checkbox'
            label='Accept terms and conditions'
            description='You agree to our Terms of Service and Privacy Policy.'
            disabled={isLoading}
          />
          <ControlledCheckboxMultiple
            name='items'
            label='Sidebar'
            description='Select the items you want to display in the sidebar.'
            options={items}
          />
          <ControlledRadioGroup name='type' label='Notify me about...' options={radioGroupOptions} />
        </AppForm>
      </CardContent>
    </Card>
  )
}
