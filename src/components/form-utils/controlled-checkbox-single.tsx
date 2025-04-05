import { useFormContext } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Checkbox } from '@/components/ui'
import { ControlledInputProps } from './controlled-input'

type ControlledCheckboxSingleProps = Omit<ControlledInputProps, 'placeholder'>

export function ControlledCheckboxSingle({ name, label, description, disabled }: ControlledCheckboxSingleProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className='flex flex-row items-start gap-3'>
            <FormControl>
              <Checkbox disabled={disabled} checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <div className='grid gap-1.5 leading-none'>
              <FormLabel>{label}</FormLabel>
              {description && <FormDescription>{description}</FormDescription>}
            </div>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
