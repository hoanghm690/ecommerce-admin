import { Suspense } from 'react'

import { AppRoutes, Loading, QueryErrorResetBoundary } from '@/components'
import AppProviders from '@/providers'
import { useLocalizeDocumentAttributes } from '@/hooks'

export function App() {
  useLocalizeDocumentAttributes()

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
