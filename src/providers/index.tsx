import { PropsWithChildren } from 'react'
import ReactQueryProvider from './react-query-provider'
import { ThemeProvider } from './theme-provider'

function AppProviders({ children }: PropsWithChildren) {
  return (
    <ReactQueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReactQueryProvider>
  )
}

export default AppProviders
