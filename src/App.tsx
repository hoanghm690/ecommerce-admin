import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import DashboardLayout from './layouts/dashboard-layout'
import Dashboard from './pages/dashboard'
import AuthLayout from './layouts/auth-layout'
import Login from './pages/auth/login'
import PublicGuard from './components/guard/public-guard'
import PrivateGuard from './components/guard/private-guard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />
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
  )
}

export default App
