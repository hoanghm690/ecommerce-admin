import { useFormContext } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

type RadioGroupOption = {
  value: string
  label: string
}

type ControlledRadioGroupProps = {
  name: string
  label: string
  disabled?: boolean
  options: RadioGroupOption[]
}

function ControlledRadioGroup({ name, label, disabled, options }: ControlledRadioGroupProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='space-y-3'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className='flex flex-col space-y-1'>
              {options.map(({ value, label }) => (
                <FormItem key={value} className='flex items-center gap-3'>
                  <FormControl>
                    <RadioGroupItem value={value} disabled={disabled} />
                  </FormControl>
                  <FormLabel className='font-normal'>{label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default ControlledRadioGroup
