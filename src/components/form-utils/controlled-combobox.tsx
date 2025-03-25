import { useFormContext } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { ControlledInputProps } from './controlled-input'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command'
import { SelectOption } from './controlled-select'

type ControlledComboboxProps = ControlledInputProps & {
  options: SelectOption[]
  commandPlaceholder: string
  commandEmptyText: string
}

function ControlledCombobox({
  name,
  label,
  placeholder,
  options,
  description,
  commandPlaceholder,
  commandEmptyText,
  disabled
}: ControlledComboboxProps) {
  const { control, setValue } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-col'>
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant='outline'
                  role='combobox'
                  className={cn('w-[200px] justify-between font-normal', !field.value && 'text-muted-foreground')}
                  disabled={disabled}
                >
                  {field.value
                    ? options.find((options) => options.value === field.value)?.label
                    : placeholder || 'Select option'}
                  <ChevronsUpDown className='opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-[200px] p-0'>
              <Command>
                <CommandInput placeholder={commandPlaceholder} className='h-9' />
                <CommandList>
                  <CommandEmpty>{commandEmptyText}</CommandEmpty>
                  <CommandGroup>
                    {options.map((options) => (
                      <CommandItem
                        value={options.label}
                        key={options.value}
                        onSelect={() => {
                          setValue(name, options.value)
                        }}
                      >
                        {options.label}
                        <Check className={cn('ml-auto', options.value === field.value ? 'opacity-100' : 'opacity-0')} />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default ControlledCombobox
