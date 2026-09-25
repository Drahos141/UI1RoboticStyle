import { cva, type VariantProps } from 'class-variance-authority'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

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
  className?: string
  children: ReactNode
} & VariantProps<typeof buttonVariants>

type ButtonLinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    disabled?: boolean
    href: string
  }

type ButtonNativeProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonProps = ButtonLinkProps | ButtonNativeProps

export function Button(props: ButtonProps) {
  const { children, className, size, variant } = props
  const classes = cn(buttonVariants({ size, variant }), className)

  if ('href' in props) {
    const {
      children: _children,
      className: _className,
      size: _size,
      variant: _variant,
      disabled,
      href,
      ...anchorProps
    } = props as ButtonLinkProps

    if (disabled) {
      return (
        <span className={cn(classes, 'cursor-not-allowed opacity-50')} aria-disabled="true">
          {children}
        </span>
      )
    }

    return (
      <a className={classes} href={href} {...anchorProps}>
        {children}
      </a>
    )
  }

  const {
    children: _children,
    className: _className,
    size: _size,
    variant: _variant,
    type = 'button',
    ...buttonProps
  } = props as ButtonNativeProps

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  )
}
