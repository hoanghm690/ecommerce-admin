import { BrowserRouter, Route, Routes } from 'react-router'
import { lazy } from 'react'
import ScrollTop from '@/components/scroll-top'
import appRoutes from '@/config/routes'
import AuthCheckingGuard from '@/components/guard/auth-checking-guard'
import PrivateGuard from '@/components/guard/private-guard'
import PublicGuard from '@/components/guard/public-guard'

const AdminLayout = lazy(() => import('@/layouts/admin-layout'))
const AuthLayout = lazy(() => import('@/layouts/auth-layout'))

const Dashboard = lazy(() => import('@/pages/dashboard'))
const Login = lazy(() => import('@/pages/login'))
const NotFound = lazy(() => import('@/pages/not-found'))

function AppRoutes() {
  return (
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
  )
}

export default AppRoutes
