import { Suspense } from 'react'

import { AppRoutes, Loading, QueryErrorResetBoundary } from '@/components'
import AppProviders from '@/providers'

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
