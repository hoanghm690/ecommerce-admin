import { ReactNode } from 'react'
import ReactQueryProvider from './react-query-provider'
import { ThemeProvider } from './theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { AuthContextProvider, authProvider } from './auth'

function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <AuthContextProvider authProvider={authProvider}>
          <Toaster />
          {children}
        </AuthContextProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  )
}

export default AppProviders
