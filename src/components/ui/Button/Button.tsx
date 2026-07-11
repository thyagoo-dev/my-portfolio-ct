import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Button.css';

const MotionLink = motion.create(Link);

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit';
  external?: boolean;
}

export function Button({ 
  variant = 'primary', 
  href, 
  onClick, 
  children, 
  className = '', 
  target, 
  rel, 
  type = 'button',
  external 
}: ButtonProps) {
  const cls = `btn btn-${variant} ${className}`.trim();

  const motionProps = {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 10 } as const
  };

  if (href) {
    const isExternal = external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    const isInternalRoute = !isExternal && href.startsWith('/');

    if (isInternalRoute) {
      return (
        <MotionLink to={href} className={cls} target={target} rel={rel} {...motionProps}>
          {children}
        </MotionLink>
      );
    }

    const finalTarget = isExternal ? '_blank' : target;
    const finalRel = isExternal ? 'noopener noreferrer' : rel;

    return (
      <motion.a
        href={href}
        className={cls}
        target={finalTarget}
        rel={finalRel}
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
