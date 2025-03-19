import { Outlet, Link } from 'react-router'

function DashboardLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link to='/dashboard/users'>Users</Link>
          </li>
          <li>
            <Link to='/dashboard/products'>Products</Link>
          </li>
          <li>
            <Link to='/dashboard/settings'>Settings</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
