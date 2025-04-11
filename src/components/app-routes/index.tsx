import { Route, Routes } from 'react-router'

import { ScrollTop } from '@/components'
import { lazyImport } from '@/utils'
import { RoutePaths } from '@/constants'

// Import guards
const AuthCheckingGuard = lazyImport(import('@/components/guard'), 'AuthCheckingGuard')
const PrivateGuard = lazyImport(import('@/components/guard'), 'PrivateGuard')
const PublicGuard = lazyImport(import('@/components/guard'), 'PublicGuard')

// Import layouts
const AdminLayout = lazyImport(import('@/layouts'), 'AdminLayout')
const AuthLayout = lazyImport(import('@/layouts'), 'AuthLayout')

// Import pages
const Dashboard = lazyImport(import('@/pages'), 'Dashboard')
const Login = lazyImport(import('@/pages'), 'Login')
const NotFound = lazyImport(import('@/pages'), 'NotFound')

export function AppRoutes() {
  return (
    <>
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
    </>
  )
}
