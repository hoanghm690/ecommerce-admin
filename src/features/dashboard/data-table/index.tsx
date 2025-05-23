import { ColumnDef } from '@tanstack/react-table'

import { Badge, Checkbox, DataTable } from '@/components'
import { TableCellViewer } from '@/features/dashboard'

import { ActionsCell, DragHandle, LimitCell, ReviewerCell, StatusCell, TargetCell } from './components'

export type DashboardType = {
  id: number
  header: string
  type: string
  status: string
  target: string
  limit: string
  reviewer: string
}

const columns: ColumnDef<DashboardType>[] = [
  {
    id: 'drag',
    header: () => null,
    cell: ({ row }) => <DragHandle id={row.original.id} />
  },
  {
    id: 'select',
    header: ({ table }) => (
      <div className='flex items-center justify-center'>
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label='Select all'
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className='flex items-center justify-center'>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label='Select row'
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'header',
    header: 'Header',
    cell: ({ row }) => {
      return <TableCellViewer item={row.original} />
    },
    enableHiding: false
  },
  {
    accessorKey: 'type',
    header: 'Section Type',
    cell: ({ row }) => (
      <div className='w-32'>
        <Badge variant='outline' className='text-muted-foreground px-1.5'>
          {row.original.type}
        </Badge>
      </div>
    )
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <StatusCell status={row.original.status} />
  },
  {
    accessorKey: 'target',
    header: () => <div className='w-full text-right'>Target</div>,
    cell: ({ row }) => <TargetCell row={row} />
  },
  {
    accessorKey: 'limit',
    header: () => <div className='w-full text-right'>Limit</div>,
    cell: ({ row }) => <LimitCell row={row} />
  },
  {
    accessorKey: 'reviewer',
    header: 'Reviewer',
    cell: ({ row }) => <ReviewerCell row={row} />
  },
  {
    id: 'actions',
    cell: () => <ActionsCell />
  }
]

export function DashboardDataTable({ data }: { data: DashboardType[] }) {
  return <DataTable data={data} columns={columns} />
}
