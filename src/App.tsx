import { Suspense } from 'react'
import { Loading } from './components/common/loading'
import AppProviders from './providers'
import AppRoutes from './components/app-routes'
import QueryErrorResetBoundary from './components/query-error-reset-boundary'

function App() {
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

export default App
