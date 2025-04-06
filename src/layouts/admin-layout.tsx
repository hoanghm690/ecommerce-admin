import { AppSidebar } from '@/components'
import { ModeToggle, SiteHeader } from '@/components/common'
import { SidebarInset } from '@/components/ui'
import { SIDEBAR_COOKIE_NAME } from '@/constants'
import { SidebarProvider } from '@/providers/sidebar-provider'
import { useState } from 'react'
import { Outlet } from 'react-router'

const getCookieValue = (name: string, defaultValue = true) => {
  if (typeof document === 'undefined') return defaultValue
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
  return match ? match[2] === 'true' : defaultValue
}

export function AdminLayout() {
  const [defaultOpen] = useState(() => getCookieValue(SIDEBAR_COOKIE_NAME))

  return (
    <>
      <SidebarProvider defaultOpen={defaultOpen}>
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
