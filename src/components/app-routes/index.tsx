import { Route, Routes } from 'react-router'
import { lazy, ComponentType } from 'react'
import { ScrollTop } from '@/components/scroll-top'
import { AuthCheckingGuard, PrivateGuard, PublicGuard } from '@/components/guard'
import { RoutePaths } from '@/constants'

// Utility function to create a lazy component from a named export
const lazyImport = <T extends ComponentType<any>>(moduleImport: Promise<{ [key: string]: T }>, name: string) =>
  lazy(() =>
    moduleImport.then((module) => ({
      default: module[name]
    }))
  )

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
