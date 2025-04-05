import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DashboardType } from '@/features/dashboard/data-table'

export function Form({ item }: { item: DashboardType }) {
  return (
    <form className='flex flex-col gap-4'>
      <div className='flex flex-col gap-3'>
        <Label htmlFor='header'>Header</Label>
        <Input id='header' defaultValue={item.header} />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-3'>
          <Label htmlFor='type'>Type</Label>
          <Select defaultValue={item.type}>
            <SelectTrigger id='type' className='w-full'>
              <SelectValue placeholder='Select a type' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Table of Contents'>Table of Contents</SelectItem>
              <SelectItem value='Executive Summary'>Executive Summary</SelectItem>
              <SelectItem value='Technical Approach'>Technical Approach</SelectItem>
              <SelectItem value='Design'>Design</SelectItem>
              <SelectItem value='Capabilities'>Capabilities</SelectItem>
              <SelectItem value='Focus Documents'>Focus Documents</SelectItem>
              <SelectItem value='Narrative'>Narrative</SelectItem>
              <SelectItem value='Cover Page'>Cover Page</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col gap-3'>
          <Label htmlFor='status'>Status</Label>
          <Select defaultValue={item.status}>
            <SelectTrigger id='status' className='w-full'>
              <SelectValue placeholder='Select a status' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Done'>Done</SelectItem>
              <SelectItem value='In Progress'>In Progress</SelectItem>
              <SelectItem value='Not Started'>Not Started</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-3'>
          <Label htmlFor='target'>Target</Label>
          <Input id='target' defaultValue={item.target} />
        </div>
        <div className='flex flex-col gap-3'>
          <Label htmlFor='limit'>Limit</Label>
          <Input id='limit' defaultValue={item.limit} />
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <Label htmlFor='reviewer'>Reviewer</Label>
        <Select defaultValue={item.reviewer}>
          <SelectTrigger id='reviewer' className='w-full'>
            <SelectValue placeholder='Select a reviewer' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Eddie Lake'>Eddie Lake</SelectItem>
            <SelectItem value='Jamik Tashpulatov'>Jamik Tashpulatov</SelectItem>
            <SelectItem value='Emily Whalen'>Emily Whalen</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </form>
  )
}
