import { useFormContext } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Checkbox } from '../ui/checkbox'

type ControlledCheckboxSingleProps = {
  name: string
  label: string
  description?: string
  disabled?: boolean
}

function ControlledCheckboxSingle({ name, label, description, disabled }: ControlledCheckboxSingleProps) {
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

export default ControlledCheckboxSingle
