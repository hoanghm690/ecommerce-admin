import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/common/use-mobile'
import { ReactNode } from 'react'
import { LoadingButton, LoadingButtonProps } from './loading-button'

interface DrawerViewerProps {
  triggerText: string
  title: string
  description?: string
  children: ReactNode
  closeText?: string
  submitButtonProps?: LoadingButtonProps
}

export function DrawerViewer({
  triggerText,
  title,
  description,
  children,
  closeText = 'Close',
  submitButtonProps
}: DrawerViewerProps) {
  const isMobile = useIsMobile()

  return (
    <Drawer direction={isMobile ? 'bottom' : 'right'}>
      <DrawerTrigger asChild>
        <Button variant='link' className='text-foreground w-fit px-0 text-left'>
          {triggerText}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='gap-1'>
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        <div className='flex flex-col gap-4 overflow-y-auto px-4 text-sm'>{children}</div>
        <DrawerFooter>
          <LoadingButton {...submitButtonProps} />
          <DrawerClose asChild>
            <Button variant='outline'>{closeText}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
