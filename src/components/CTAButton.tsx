import type { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './CTAButton.module.css';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CTAButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...rest
}: CTAButtonProps) {
  const combinedStyles = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles} {...rest}>
      {children}
    </button>
  );
}
