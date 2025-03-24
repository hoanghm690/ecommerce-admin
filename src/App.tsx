import { BrowserRouter, Route, Routes } from 'react-router'
import PublicGuard from './components/guard/public-guard'
import PrivateGuard from './components/guard/private-guard'
import { lazy, Suspense } from 'react'
import { Loading } from './components/loading'
import { ThemeProvider } from './components/theme-provider'
import AuthCheckingGuard from './components/guard/auth-checking-guard'

const DashboardLayout = lazy(() => import('./layouts/dashboard-layout'))
const AuthLayout = lazy(() => import('./layouts/auth-layout'))

const Dashboard = lazy(() => import('./pages/dashboard'))
const Login = lazy(() => import('./pages/auth/login'))

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AuthCheckingGuard />} />
            <Route
              element={
                <PrivateGuard>
                  <DashboardLayout />
                </PrivateGuard>
              }
            >
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route
              element={
                <PublicGuard>
                  <AuthLayout />
                </PublicGuard>
              }
            >
              <Route path='/login' element={<Login />} />
            </Route>
            <Route path='*' element={<h1>404 - Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
