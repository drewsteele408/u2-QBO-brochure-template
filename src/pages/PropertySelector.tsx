import { useNavigate } from 'react-router-dom';
import { getAvailableProperties } from '../services/propertyLoader';
import styles from './PropertySelector.module.css';

export default function PropertySelector() {
  const navigate = useNavigate();
  const properties = getAvailableProperties();

  const handleSelectProperty = (propertyId: string) => {
    navigate(`/${propertyId}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome to U2 Property Brochures</h1>
          <p className={styles.subtitle}>
            Select an apartment community to explore floor plans, amenities, and more.
          </p>
        </div>

        <div className={styles.grid}>
          {properties.map((property) => (
            <button
              key={property.id}
              onClick={() => handleSelectProperty(property.id)}
              className={styles.card}
            >
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{property.displayName}</h2>
                <p className={styles.cardCta}>Browse Properties →</p>
              </div>
            </button>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Powered by U2 Applicant Portal
          </p>
        </div>
      </div>
    </div>
  );
}
