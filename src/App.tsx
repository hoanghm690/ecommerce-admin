import { Suspense } from 'react'
import { Loading } from './components/loading'
import AppProviders from './providers'
import AppRoutes from './components/app-routes'

function App() {
  return (
    <AppProviders>
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
    </AppProviders>
  )
}

export default App
