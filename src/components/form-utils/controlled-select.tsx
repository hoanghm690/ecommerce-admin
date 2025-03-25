import { useFormContext } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type SelectOption = {
  value: string
  label: string
}

type ControlledSelectProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  disabled?: boolean
  options: SelectOption[]
}

function ControlledSelect({ name, label, placeholder, description, disabled, options }: ControlledSelectProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
            <FormControl>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder={placeholder || label} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default ControlledSelect
