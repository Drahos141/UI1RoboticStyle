import type { HTMLAttributes } from 'react'

import { cn } from '../../lib/utils'

type SeparatorProps = HTMLAttributes<HTMLDivElement> & {
  decorative?: boolean
}

export function Separator({ className, decorative = false, ...props }: SeparatorProps) {
  return (
    <div
      className={cn('h-px w-full bg-white/10', className)}
      {...props}
      aria-hidden={decorative || undefined}
      role={decorative ? undefined : 'separator'}
    />
  )
}
