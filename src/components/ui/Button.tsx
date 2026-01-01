'use client';

import { motion } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', className, href, onClick, disabled, type = 'button', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap';
    
    const variants = {
      primary: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25',
      secondary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25',
      outline: 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white bg-transparent',
      ghost: 'text-gray-300 hover:text-white hover:bg-white/10 border border-gray-700 hover:border-gray-600'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-2',
      md: 'px-6 py-2.5 text-sm gap-2',
      lg: 'px-8 py-3 text-base gap-2',
      xl: 'px-10 py-4 text-lg gap-3'
    };

    const classes = cn(baseClasses, variants[variant], sizes[size], className);

    const MotionComponent = href ? motion.a : motion.button;

    return (
      <MotionComponent
        ref={ref as React.Ref<HTMLButtonElement & HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        disabled={disabled}
        type={href ? undefined : type}
        className={classes}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

Button.displayName = 'Button';

export default Button;
