import { Button, ButtonProps } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

export type LoadingButtonProps = { loading?: boolean } & ButtonProps

export function LoadingButton({ loading = false, children = 'Submit', ...props }: LoadingButtonProps) {
  return (
    <Button {...props} disabled={loading}>
      {loading && <Loader2 className='animate-spin' />}
      {children}
    </Button>
  )
}
