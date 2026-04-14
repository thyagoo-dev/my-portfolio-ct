import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import './Button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit';
}

export function Button({ variant = 'primary', href, onClick, children, className = '', target, rel, type = 'button' }: ButtonProps) {
  const cls = `btn btn-${variant} ${className}`.trim();

  const motionProps = {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  if (href) {
    return (
      <motion.a 
        href={href} 
        className={cls} 
        target={target} 
        rel={rel}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button 
      className={cls} 
      onClick={onClick} 
      type={type}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
