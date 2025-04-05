import { ChartAreaInteractive } from '@/features/dashboard/chart-area-interactive'
import { SectionCards } from '@/features/dashboard/section-cards'
import data from '@/app/dashboard/data.json'
import { DashboardDataTable } from '@/features/dashboard/data-table'

export function Dashboard() {
  return (
    <>
      <SectionCards />
      <div className='px-4 lg:px-6'>
        <ChartAreaInteractive />
      </div>
      <DashboardDataTable data={data} />
    </>
  )
}
