import { useFormContext } from 'react-hook-form'

import {
  ControlledInputProps,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
  RadioGroupItem
} from '@/components'

type RadioGroupOption = {
  value: string
  label: string
}

type ControlledRadioGroupProps = Omit<ControlledInputProps, 'placeholder' | 'description'> & {
  options: RadioGroupOption[]
}

export function ControlledRadioGroup({ name, label, disabled, options }: ControlledRadioGroupProps) {
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
