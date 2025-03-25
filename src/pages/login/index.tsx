import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { z } from 'zod'
import AppForm from '@/components/form-utils/app-form'
import ControlledInput from '@/components/form-utils/controlled-input'
import appMessages from '@/config/messages'
import { useLogin } from '@/hooks/auth/use-login'
import ControlledCheckboxSingle from '@/components/form-utils/controlled-checkbox-single'
import ControlledCheckboxMultiple from '@/components/form-utils/controlled-checkbox-multiple'
import ControlledRadioGroup from '@/components/form-utils/controlled-radio-group'
import ControlledSelect from '@/components/form-utils/controlled-select'
import ControlledSelectGroup from '@/components/form-utils/controlled-select-group'
import ControlledSwitch from '@/components/form-utils/controlled-switch'
import ControlledTextarea from '@/components/form-utils/controlled-textarea'
import ControlledCombobox from '@/components/form-utils/controlled-combobox'

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

const selectOptions = [
  {
    value: 'm@example.com',
    label: 'm@example.com'
  },
  {
    value: 'm@google.com',
    label: 'm@google.com'
  },
  {
    value: 'm@support.com',
    label: 'm@support.com'
  }
]

const timezones = [
  {
    group: 'North America',
    items: [
      { value: 'est', label: 'Eastern Standard Time (EST)' },
      { value: 'cst', label: 'Central Standard Time (CST)' },
      { value: 'mst', label: 'Mountain Standard Time (MST)' },
      { value: 'pst', label: 'Pacific Standard Time (PST)' },
      { value: 'akst', label: 'Alaska Standard Time (AKST)' },
      { value: 'hst', label: 'Hawaii Standard Time (HST)' }
    ]
  },
  {
    group: 'Europe & Africa',
    items: [
      { value: 'gmt', label: 'Greenwich Mean Time (GMT)' },
      { value: 'cet', label: 'Central European Time (CET)' },
      { value: 'eet', label: 'Eastern European Time (EET)' },
      { value: 'west', label: 'Western European Summer Time (WEST)' },
      { value: 'cat', label: 'Central Africa Time (CAT)' },
      { value: 'eat', label: 'East Africa Time (EAT)' }
    ]
  },
  {
    group: 'Asia',
    items: [
      { value: 'msk', label: 'Moscow Time (MSK)' },
      { value: 'ist', label: 'India Standard Time (IST)' },
      { value: 'cst_china', label: 'China Standard Time (CST)' },
      { value: 'jst', label: 'Japan Standard Time (JST)' },
      { value: 'kst', label: 'Korea Standard Time (KST)' },
      { value: 'ist_indonesia', label: 'Indonesia Central Standard Time (WITA)' }
    ]
  },
  {
    group: 'Australia & Pacific',
    items: [
      { value: 'awst', label: 'Australian Western Standard Time (AWST)' },
      { value: 'acst', label: 'Australian Central Standard Time (ACST)' },
      { value: 'aest', label: 'Australian Eastern Standard Time (AEST)' },
      { value: 'nzst', label: 'New Zealand Standard Time (NZST)' },
      { value: 'fjt', label: 'Fiji Time (FJT)' }
    ]
  },
  {
    group: 'South America',
    items: [
      { value: 'art', label: 'Argentina Time (ART)' },
      { value: 'bot', label: 'Bolivia Time (BOT)' },
      { value: 'brt', label: 'Brasilia Time (BRT)' },
      { value: 'clt', label: 'Chile Standard Time (CLT)' }
    ]
  }
]

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' }
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
  }),
  email2: z
    .string({
      required_error: 'Please select an email to display.'
    })
    .email(),
  timezone: z.string({
    required_error: 'Please select a timezone to display.'
  }),
  marketing_emails: z.boolean().default(false).optional(),
  bio: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.'
    })
    .max(30, {
      message: 'Bio must not be longer than 30 characters.'
    }),
  language: z.string({
    required_error: 'Please select a language.'
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
          defaultValues={{ email: '', password: '', checkbox: false, items: [], marketing_emails: false, bio: '' }}
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
            disabled={isLoading}
          />
          <ControlledRadioGroup
            name='type'
            label='Notify me about...'
            options={radioGroupOptions}
            disabled={isLoading}
          />
          <ControlledSelect
            name='email2'
            label='Email'
            placeholder='Select a verified email to display'
            description='You can manage email addresses in your email settings.'
            options={selectOptions}
            disabled={isLoading}
          />
          <ControlledSelectGroup
            name='timezone'
            label='Timezone'
            placeholder='Select a timezone'
            options={timezones}
            disabled={isLoading}
          />
          <ControlledSwitch
            name='marketing_emails'
            label='Marketing emails'
            description='Receive emails about new products, features, and more.'
            disabled={isLoading}
          />
          <ControlledTextarea
            name='bio'
            label='Bio'
            placeholder='Tell us a little bit about yourself'
            description='You can @mention other users and organizations.'
            disabled={isLoading}
          />
          <ControlledCombobox
            name='language'
            label='Language'
            placeholder='Select language'
            description='This is the language that will be used in the dashboard.'
            commandPlaceholder='Search framework...'
            commandEmptyText='No framework found.'
            options={languages}
            disabled={isLoading}
          />
        </AppForm>
      </CardContent>
    </Card>
  )
}
