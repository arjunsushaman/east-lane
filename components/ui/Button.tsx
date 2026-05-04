import Link from 'next/link'

type ButtonVariant = 'primary' | 'outline' | 'outline-dark' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-amber hover:bg-terracotta text-cream border border-amber hover:border-terracotta',
  outline:
    'bg-transparent border border-cream text-cream hover:bg-cream/10',
  'outline-dark':
    'bg-transparent border border-terracotta text-terracotta hover:bg-terracotta hover:text-cream',
  ghost:
    'bg-transparent text-terracotta hover:text-amber underline underline-offset-4',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-xs tracking-widest',
  md: 'px-7 py-3 text-sm tracking-widest',
  lg: 'px-10 py-4 text-sm tracking-widest',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-jost font-medium uppercase transition-colors duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
