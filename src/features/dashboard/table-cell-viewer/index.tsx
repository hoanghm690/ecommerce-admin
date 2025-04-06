import { DrawerViewer } from '@/components'
import { DashboardType } from '@/features/dashboard'

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
