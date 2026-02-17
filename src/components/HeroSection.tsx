import type { ReactNode } from 'react';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
  height?: 'sm' | 'md' | 'lg';
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  children,
  height = 'lg',
}: HeroSectionProps) {
  return (
    <div
      className={`${styles.heroContainer} ${styles[height]}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated Overlay */}
      <div className={styles.overlay} />
      
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={`${styles.bgElement} ${styles.bgElementPurple}`} />
        <div className={`${styles.bgElement} ${styles.bgElementBlue}`} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          {title}
        </h1>
        {subtitle && (
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
