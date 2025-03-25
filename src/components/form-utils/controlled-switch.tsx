import { useFormContext } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Switch } from '../ui/switch'
import { ControlledInputProps } from './controlled-input'

type ControlledSwitchProps = Omit<ControlledInputProps, 'placeholder'>

function ControlledSwitch({ name, label, description, disabled }: ControlledSwitchProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
          <div className='space-y-2'>
            <FormLabel>{label}</FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
              aria-readonly={disabled}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}

export default ControlledSwitch
