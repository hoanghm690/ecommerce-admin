import { AppSidebar } from '@/components/app-sidebar'
import { ModeToggle } from '@/components/mode-toggle'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from 'react-router'

function AdminLayout() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <SiteHeader />
          <div className='flex flex-1 flex-col'>
            <div className='@container/main flex flex-1 flex-col gap-2'>
              <div className='flex flex-col flex-1 gap-4 py-4 md:gap-6 md:py-6'>
                <Outlet />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
      <ModeToggle />
    </>
  )
}

export default AdminLayout
