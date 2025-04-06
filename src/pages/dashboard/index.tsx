import data from '@/app/dashboard/data.json'
import { ChartAreaInteractive, DashboardDataTable, SectionCards } from '@/features/dashboard'

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
