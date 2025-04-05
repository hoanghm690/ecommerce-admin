import { Suspense } from 'react'
import { Loading } from '@/components/common'
import AppProviders from '@/providers'
import { AppRoutes } from '@/components/app-routes'
import { QueryErrorResetBoundary } from '@/components/query-error-reset-boundary'

export function App() {
  return (
    <AppProviders>
      <QueryErrorResetBoundary>
        <Suspense fallback={<Loading />}>
          <AppRoutes />
        </Suspense>
      </QueryErrorResetBoundary>
    </AppProviders>
  )
}
