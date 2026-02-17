import { Link, useLocation } from 'react-router-dom';
import { propertyConfig } from '../config/propertyData';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoText}>Mesa Falls</div>
          <div className={styles.logoSubtext}>Apartments</div>
        </Link>

        <ul className={styles.menu}>
          <li>
            <Link
              to="/"
              className={`${styles.menuItem} ${isActive('/') ? styles.active : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/floor-plans"
              className={`${styles.menuItem} ${isActive('/floor-plans') ? styles.active : ''}`}
            >
              Floor Plans
            </Link>
          </li>
          <li>
            <Link
              to="/amenities"
              className={`${styles.menuItem} ${isActive('/amenities') ? styles.active : ''}`}
            >
              Amenities
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={`${styles.menuItem} ${isActive('/gallery') ? styles.active : ''}`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/location"
              className={`${styles.menuItem} ${isActive('/location') ? styles.active : ''}`}
            >
              Location
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
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
