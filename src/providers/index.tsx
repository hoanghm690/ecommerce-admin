import { PropsWithChildren } from 'react'
import ReactQueryProvider from './react-query-provider'
import { ThemeProvider } from './theme-provider'
import { Toaster } from '@/components/ui/sonner'

function AppProviders({ children }: PropsWithChildren) {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <Toaster />
        {children}
      </ThemeProvider>
    </ReactQueryProvider>
  )
}

export default AppProviders
