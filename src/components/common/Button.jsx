import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Link } from 'react-router-dom';

const Button = forwardRef(
  ({ className, variant = 'primary', size = 'default', to, href, children, ...props }, ref) => {
    const classNames = cn(
      'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      {
        'bg-primary text-text-dark hover:bg-primary-hover hover:glow-primary': variant === 'primary',
        'bg-accent text-text-dark hover:bg-amber-600 hover:glow-accent': variant === 'accent',
        'glass text-text-dark hover:glass-card hover:text-primary border-primary/20': variant === 'glass',
        'bg-transparent text-text-dark hover:bg-gray-100': variant === 'ghost',
        'border-2 border-primary text-primary hover:bg-primary hover:text-text-dark': variant === 'outline',
        'h-10 py-2 px-4 text-sm': size === 'default',
        'h-12 py-3 px-8 text-base': size === 'lg',
        'h-8 px-3 text-xs': size === 'sm',
      },
      className
    );

    if (to) {
      return (
        <Link to={to} className={classNames} ref={ref} {...props}>
          {children}
        </Link>
      );
    }

    if (href) {
      return (
        <a href={href} className={classNames} ref={ref} {...props}>
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={classNames}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
