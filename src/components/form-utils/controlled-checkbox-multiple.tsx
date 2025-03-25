import { useFormContext } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Checkbox } from '@/components/ui/checkbox'
import { ControlledInputProps } from './controlled-input'

export type CheckboxOption = {
  value: string
  label: string
}

type ControlledCheckboxMultipleProps = Omit<ControlledInputProps, 'placeholder'> & {
  options: CheckboxOption[]
}

function ControlledCheckboxMultiple({ name, label, description, disabled, options }: ControlledCheckboxMultipleProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className='mb-4'>
            <FormLabel className='text-base'>{label}</FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          {options.map((options) => (
            <FormField
              key={options.value}
              control={control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem key={options.value} className='flex flex-row items-start gap-3'>
                    <FormControl>
                      <Checkbox
                        disabled={disabled}
                        checked={field.value?.includes(options.value)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, options.value])
                            : field.onChange(field.value?.filter((value: string) => value !== options.value))
                        }}
                      />
                    </FormControl>
                    <FormLabel className='text-sm font-normal'>{options.label}</FormLabel>
                  </FormItem>
                )
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default ControlledCheckboxMultiple
