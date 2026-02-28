import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex cursor-pointer items-center justify-center font-body font-[500] uppercase tracking-[0.12em] transition-all duration-300',
          'disabled:cursor-not-allowed disabled:opacity-50',
          // Variants
          variant === 'primary' && [
            'bg-amber text-linen',
            'hover:bg-glow hover:text-cocoa',
            '[box-shadow:var(--shadow-button)] hover:[box-shadow:var(--shadow-hover)]',
          ],
          variant === 'outline' && [
            'border border-current bg-transparent text-cocoa',
            'hover:bg-cocoa hover:text-cream',
          ],
          variant === 'ghost' && [
            'bg-transparent text-smoke',
            'hover:text-cocoa',
          ],
          // Sizes
          size === 'sm' && 'px-5 py-2.5 text-[0.72rem]',
          size === 'md' && 'px-8 py-3.5 text-[0.78rem]',
          size === 'lg' && 'px-10 py-4 text-[0.82rem]',
          // Border radius always minimal per design guide
          'rounded-[2px]',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
