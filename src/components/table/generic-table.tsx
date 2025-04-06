import { UniqueIdentifier } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { ColumnDef, flexRender, HeaderGroup, Row } from '@tanstack/react-table'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components'

import { DraggableRow } from '.'

export function GenericTable<T extends { id: UniqueIdentifier }>({
  columns,
  rows,
  headerGroups,
  dataIds
}: {
  columns: ColumnDef<T>[]
  rows: Row<T>[]
  headerGroups: HeaderGroup<T>[]
  dataIds: UniqueIdentifier[]
}) {
  return (
    <Table>
      <TableHeader className='bg-muted sticky top-0 z-10'>
        {headerGroups.map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody className='**:data-[slot=table-cell]:first:w-8'>
        {rows.length ? (
          <SortableContext items={dataIds} strategy={verticalListSortingStrategy}>
            {rows.map((row) => (
              <DraggableRow key={row.id} row={row} />
            ))}
          </SortableContext>
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className='h-24 text-center'>
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
