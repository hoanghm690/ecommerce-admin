import { BrowserRouter, Route, Routes } from 'react-router'
import { lazy } from 'react'
import ScrollTop from '@/components/scroll-top'
import AuthCheckingGuard from '@/components/guard/auth-checking-guard'
import PrivateGuard from '@/components/guard/private-guard'
import PublicGuard from '@/components/guard/public-guard'
import { RoutePaths } from '@/constants'

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
        <Route path={RoutePaths.HOME} element={<AuthCheckingGuard />} />
        <Route element={<PrivateGuard />}>
          <Route element={<AdminLayout />}>
            <Route path={RoutePaths.DASHBOARD} element={<Dashboard />} />
          </Route>
        </Route>
        <Route element={<PublicGuard />}>
          <Route element={<AuthLayout />}>
            <Route path={RoutePaths.LOGIN} element={<Login />} />
          </Route>
        </Route>
        <Route path={RoutePaths.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
