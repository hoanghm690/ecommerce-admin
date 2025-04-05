import { format } from 'date-fns'
import { useFormContext } from 'react-hook-form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui'
import { Button } from '@/components/ui'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { Calendar, CalendarProps } from '@/components/ui'
import { ControlledInputProps } from './controlled-input'

type ControlledDatePickerProps = ControlledInputProps & {
  calendarProps?: CalendarProps
}

export function ControlledDatePicker({
  name,
  label,
  placeholder,
  description,
  disabled = false,
  calendarProps
}: ControlledDatePickerProps) {
  const { control } = useFormContext()

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
                  variant={'outline'}
                  className={cn('w-[240px] pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                  disabled={disabled}
                >
                  {field.value ? format(field.value, 'PPP') : <span>{placeholder || 'Pick a date'}</span>}
                  <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                mode='single'
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
                {...calendarProps}
              />
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
