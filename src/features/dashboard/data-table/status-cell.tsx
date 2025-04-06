import { IconCircleCheckFilled, IconLoader } from '@tabler/icons-react'

import { Badge } from '@/components'

import { DashboardType } from '.'

export function StatusCell({ status }: Pick<DashboardType, 'status'>) {
  return (
    <Badge variant='outline' className='text-muted-foreground px-1.5'>
      {status === 'Done' ? <IconCircleCheckFilled className='fill-green-500 dark:fill-green-400' /> : <IconLoader />}
      {status}
    </Badge>
  )
}
