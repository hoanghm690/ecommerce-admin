import { BrowserRouter, Route, Routes } from 'react-router'
import PublicGuard from './components/guard/public-guard'
import PrivateGuard from './components/guard/private-guard'
import { lazy, Suspense } from 'react'
import { Loading } from './components/loading'
import { ThemeProvider } from './components/theme-provider'
import AuthCheckingGuard from './components/guard/auth-checking-guard'
import appRoutes from './config/routes'
import ScrollTop from './components/scroll-top'

const AdminLayout = lazy(() => import('./layouts/admin-layout'))
const AuthLayout = lazy(() => import('./layouts/auth-layout'))

const Dashboard = lazy(() => import('./pages/dashboard'))
const Login = lazy(() => import('./pages/auth/login'))
const NotFound = lazy(() => import('./pages/not-found'))

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <ScrollTop />
          <Routes>
            <Route path={appRoutes.home} element={<AuthCheckingGuard />} />
            <Route
              element={
                <PrivateGuard>
                  <AdminLayout />
                </PrivateGuard>
              }
            >
              <Route path={appRoutes.dashboard} element={<Dashboard />} />
            </Route>
            <Route
              element={
                <PublicGuard>
                  <AuthLayout />
                </PublicGuard>
              }
            >
              <Route path={appRoutes.login} element={<Login />} />
            </Route>
            <Route path={appRoutes.notFound} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
