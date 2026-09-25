import type { HTMLAttributes } from 'react'

import { cn } from '../../lib/utils'

type ProgressProps = HTMLAttributes<HTMLDivElement> & {
  value: number
}

export function Progress({ className, value, ...props }: ProgressProps) {
  const boundedValue = Math.max(0, Math.min(100, value))
  const width = `${boundedValue}%`

  return (
    <div
      className={cn('relative h-2 w-full overflow-hidden rounded-full bg-white/10', className)}
      role="progressbar"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={boundedValue}
      {...props}
    >
      <div className="h-full rounded-full bg-white transition-all" style={{ width }} />
    </div>
  )
}
