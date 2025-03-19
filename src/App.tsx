import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import DashboardLayout from './layouts/dashboard-layout'
import AuthLayout from './layouts/auth-layout'
import PublicGuard from './components/guard/public-guard'
import PrivateGuard from './components/guard/private-guard'
import { lazy, Suspense } from 'react'
import { Loading } from './components/loading'
import { ThemeProvider } from './components/theme-provider'

const Dashboard = lazy(() => import('./pages/dashboard'))
const Login = lazy(() => import('./pages/auth/login'))

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/dashboard' replace />} />
            <Route
              path='/dashboard'
              element={
                <PrivateGuard>
                  <DashboardLayout />
                </PrivateGuard>
              }
            >
              <Route index element={<Dashboard />} />
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
