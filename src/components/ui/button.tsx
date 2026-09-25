import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-zinc-200',
        outline: 'border border-white/15 bg-transparent text-white hover:bg-white/10',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-zinc-800',
        ghost: 'text-white hover:bg-white/10',
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-9 px-4 text-xs uppercase tracking-[0.2em]',
        lg: 'h-12 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type SharedProps = {
  asChild?: boolean
  children: ReactNode
  className?: string
} & VariantProps<typeof buttonVariants>

type ButtonProps = SharedProps &
  (
    | ({ asChild?: false } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ asChild: true } & AnchorHTMLAttributes<HTMLAnchorElement>)
  )

export function Button({
  asChild = false,
  children,
  className,
  size,
  variant,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ size, variant }), className)

  if (asChild) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
