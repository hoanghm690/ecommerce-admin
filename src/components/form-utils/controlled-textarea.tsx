import { useFormContext } from 'react-hook-form'

import {
  ControlledInputProps,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Textarea
} from '@/components'

type ControlledTextareaProps = ControlledInputProps

export function ControlledTextarea({
  name,
  label,
  placeholder,
  description,
  disabled = false
}: ControlledTextareaProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea disabled={disabled} placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
