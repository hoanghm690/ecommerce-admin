import { Outlet } from 'react-router'

export function AuthLayout() {
  return (
    <div className='flex min-h-svh w-full flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10'>
      <div className='flex w-full max-w-sm flex-col'>
        <Outlet />
      </div>
    </div>
  )
}
