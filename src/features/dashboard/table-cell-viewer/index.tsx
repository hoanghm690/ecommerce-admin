import { DashboardType } from '../data-table'
import { DrawerViewer } from '@/components/common/drawer-viewer'
import { ChartAreaInteractive } from './chart-area-interactive'
import { Form } from './form'

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
