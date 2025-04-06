import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from './error-fallback'

export function QueryErrorResetBoundary({ children }: PropsWithChildren) {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  )
}

export * from './error-fallback'
