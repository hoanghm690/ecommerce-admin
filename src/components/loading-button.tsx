import { Button, ButtonProps } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

export function LoadingButton({ loading = false, children, ...props }: { loading?: boolean } & ButtonProps) {
  return (
    <Button {...props} disabled={loading}>
      {loading && <Loader2 className='animate-spin' />}
      {children}
    </Button>
  )
}
