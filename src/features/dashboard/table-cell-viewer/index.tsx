import { DashboardType } from '@/features/dashboard/data-table'
import { DrawerViewer } from '@/components/common/drawer-viewer'
import { ChartAreaInteractive, Form } from './components'

export function TableCellViewer({ item }: { item: DashboardType }) {
  return (
    <DrawerViewer
      triggerText={item.header}
      title={item.header}
      description='Showing total visitors for the last 6 months'
      closeText='Done'
    >
      <ChartAreaInteractive />
      <Form item={item} />
    </DrawerViewer>
  )
}
