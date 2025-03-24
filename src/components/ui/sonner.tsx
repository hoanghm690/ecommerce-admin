import { useTheme } from '@/providers/theme-provider'
import { Toaster as Sonner, ToasterProps } from 'sonner'
import { HiMiniCheckCircle } from 'react-icons/hi2'
import { RiErrorWarningFill } from 'react-icons/ri'
import { IoIosWarning, IoIosInformationCircle } from 'react-icons/io'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)'
        } as React.CSSProperties
      }
      icons={{
        success: <HiMiniCheckCircle fontSize={20} className='text-green-600' />,
        error: <RiErrorWarningFill fontSize={20} className='text-red-600' />,
        warning: <IoIosWarning fontSize={20} className='text-yellow-600' />,
        info: <IoIosInformationCircle fontSize={20} className='text-blue-600' />
      }}
      {...props}
    />
  )
}

export { Toaster }
