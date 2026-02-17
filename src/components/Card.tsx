import type { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  title,
  description,
  image,
  children,
  className = '',
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`${styles.card} ${onClick ? styles.cardClickable : ''} ${className}`}
    >
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.childrenContainer}>{children}</div>
      </div>
    </div>
  );
}
