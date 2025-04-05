import { FallbackProps } from 'react-error-boundary'
import { Button } from '@/components/ui'

export function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <section className='size-full'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white'>
            Sorry about the interruption
          </p>
          <p className='mb-8 text-lg font-light text-gray-500 dark:text-gray-400'>
            There was a technical issue and we're looking into it.
            <br />
            Please try refreshing the page or come back later.
          </p>
          <Button onClick={resetErrorBoundary}>Refresh page</Button>
        </div>
      </div>
    </section>
  )
}
