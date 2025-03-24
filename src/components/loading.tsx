import { cn } from '@/lib/utils'

export function Loading({ isFullScreen = true }: { isFullScreen?: boolean }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-6 bg-background p-6 md:p-10',
        isFullScreen ? 'fixed inset-0 z-50' : 'flex-1 w-full'
      )}
    >
      <div className='dot-spinner'>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
      </div>
    </div>
  )
}
