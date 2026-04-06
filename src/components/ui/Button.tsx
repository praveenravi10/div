import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 shadow-glow hover:shadow-glow-lg active:scale-[0.98]',
  secondary:
    'bg-accent-600 text-white hover:bg-accent-500 shadow-glow-accent active:scale-[0.98]',
  outline:
    'border border-primary-500 text-primary-400 hover:bg-primary-500/10 active:scale-[0.98]',
  ghost: 'text-gray-300 hover:bg-white/5 hover:text-white active:scale-[0.98]',
  danger: 'bg-red-600 text-white hover:bg-red-700 active:scale-[0.98]',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      as: Tag = 'button',
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center rounded-lg font-medium',
      'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (Tag === 'a' && href) {
      return (
        <a href={href} target={target} rel={rel} className={baseClasses}>
          {loading ? <Loader2 className="animate-spin w-4 h-4" /> : leftIcon}
          {children}
          {!loading && rightIcon}
        </a>
      );
    }

    return (
      <button ref={ref} className={baseClasses} disabled={disabled || loading} {...props}>
        {loading ? <Loader2 className="animate-spin w-4 h-4" /> : leftIcon}
        {children}
        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
