import { useFormContext } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Checkbox } from '../ui/checkbox'

type ControlledCheckboxSingleProps = {
  name: string
  label: string
  disabled?: boolean
}

function ControlledCheckboxSingle({ name, label, disabled }: ControlledCheckboxSingleProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className='flex space-x-2'>
            <FormControl>
              <Checkbox disabled={disabled} checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <FormLabel>{label}</FormLabel>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default ControlledCheckboxSingle
