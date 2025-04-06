import { useFormContext } from 'react-hook-form'

import {
  ControlledSelectProps,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectOption,
  SelectTrigger,
  SelectValue
} from '@/components'

export type SelectGroupOption = {
  group: string
  items: SelectOption[]
}

type ControlledSelectGroupProps = Omit<ControlledSelectProps, 'options'> & {
  options: SelectGroupOption[]
}

export function ControlledSelectGroup({
  name,
  label,
  placeholder,
  description,
  disabled,
  options
}: ControlledSelectGroupProps) {
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
              {options.map(({ group, items }) => (
                <SelectGroup key={group}>
                  <SelectLabel>{group}</SelectLabel>
                  {items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
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
