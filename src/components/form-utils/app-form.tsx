import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { DefaultValues, FieldValues, SubmitHandler, useForm, UseFormReturn } from 'react-hook-form'
import { ZodType, ZodTypeDef } from 'zod'
import { Form } from '@/components/ui/form'
import { LoadingButton, LoadingButtonProps } from '@/components/common/loading-button'

interface AppFormProps<T extends FieldValues> {
  schema: ZodType<T, ZodTypeDef, T>
  defaultValues: DefaultValues<T>
  onSubmit: SubmitHandler<T>
  children: ReactNode
  submitButtonProps?: LoadingButtonProps
}

function AppForm<T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  children,
  submitButtonProps
}: AppFormProps<T>) {
  const form: UseFormReturn<T> = useForm<T>({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        {children}
        <LoadingButton type='submit' {...submitButtonProps} />
      </form>
    </Form>
  )
}

export default AppForm
