import { ReactNode } from 'react'

import { Toaster } from '@/components'

import { AuthContextProvider, authProvider } from './auth'
import { ReactQueryProvider } from './react-query-provider'
import { ThemeProvider } from './theme-provider'

export function AppProviders({ children }: { children: ReactNode }) {
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

// Default export for backwards compatibility
export default AppProviders

// Re-export all providers
export * from './auth'
export * from './react-query-provider'
export * from './sidebar-provider'
export * from './theme-provider'
