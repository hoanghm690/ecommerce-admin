import { useFormContext } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Checkbox } from '@/components/ui/checkbox'

type CheckboxOption = {
  id: string
  label: string
}

type ControlledCheckboxMultipleProps = {
  name: string
  label: string
  description?: string
  disabled?: boolean
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
              key={options.id}
              control={control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem key={options.id} className='flex flex-row items-start gap-3'>
                    <FormControl>
                      <Checkbox
                        disabled={disabled}
                        checked={field.value?.includes(options.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, options.id])
                            : field.onChange(field.value?.filter((value: string) => value !== options.id))
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
