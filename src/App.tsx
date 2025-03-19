import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import ProtectedRoute from './components/protected-route'
import DashboardLayout from './layouts/dashboard-layout'
import Dashboard from './pages/dashboard'
import AuthLayout from './layouts/auth-layout'
import Login from './pages/auth/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />

        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
        </Route>

        <Route path='*' element={<h1>404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
