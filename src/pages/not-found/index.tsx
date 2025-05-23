import { Link } from 'react-router'

import { Button } from '@/components'
import { RoutePaths } from '@/constants'

export function NotFound() {
  return (
    <section className='size-full'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl'>404</h1>
          <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white'>
            Something's missing.
          </p>
          <p className='mb-8 text-lg font-light text-gray-500 dark:text-gray-400'>
            Sorry, we can't find that page. You'll find lots to explore on the dashboard page.
          </p>
          <Button asChild>
            <Link to={RoutePaths.DASHBOARD}>Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
