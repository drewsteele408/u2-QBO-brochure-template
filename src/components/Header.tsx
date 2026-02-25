import { Link, useLocation, useParams } from 'react-router-dom';
import { usePropertyConfig } from '../context/PropertyContext';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();
  const { propertyId } = useParams<{ propertyId: string }>();
  const propertyConfig = usePropertyConfig();

  // Parse property name to separate main name and suffix
  const nameParts = propertyConfig.name.split(' ');
  const suffix = nameParts[nameParts.length - 1];
  const mainName = nameParts.slice(0, -1).join(' ');

  // Build base path for navigation
  const basePath = propertyId ? `/${propertyId}` : '/';

  const isActive = (path: string) => {
    const fullPath = propertyId ? `/${propertyId}${path}` : path;
    return location.pathname === fullPath;
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoText}>{mainName}</div>
          <div className={styles.logoSubtext}>{suffix}</div>
        </Link>

        <ul className={styles.menu}>
          <li>
            <Link
              to={basePath}
              className={`${styles.menuItem} ${isActive('/') ? styles.active : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`${basePath}/floor-plans`}
              className={`${styles.menuItem} ${isActive('/floor-plans') ? styles.active : ''}`}
            >
              Floor Plans
            </Link>
          </li>
          <li>
            <Link
              to={`${basePath}/amenities`}
              className={`${styles.menuItem} ${isActive('/amenities') ? styles.active : ''}`}
            >
              Amenities
            </Link>
          </li>
          <li>
            <Link
              to={`${basePath}/gallery`}
              className={`${styles.menuItem} ${isActive('/gallery') ? styles.active : ''}`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to={`${basePath}/location`}
              className={`${styles.menuItem} ${isActive('/location') ? styles.active : ''}`}
            >
              Location
            </Link>
          </li>
          <li>
            <Link
              to={`${basePath}/contact`}
              className={`${styles.menuItem} ${isActive('/contact') ? styles.active : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <a
          href={propertyConfig.applicantPortalURL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.applyBtn} btn btn-primary`}
        >
          Apply Now
        </a>
      </nav>
    </header>
  );
}
