import { PropsWithChildren } from 'react'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './error-fallback'

function QueryErrorResetBoundary({ children }: PropsWithChildren) {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  )
}

export default QueryErrorResetBoundary
