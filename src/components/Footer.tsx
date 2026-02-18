import { Link } from 'react-router-dom';
import { propertyConfig } from '../config/propertyData';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Property Info */}
          <div>
            <h3 className={styles.heading}>{propertyConfig.name}</h3>
            <p className={styles.tagline}>{propertyConfig.tagline}</p>
            <div className={styles.contactList}>
              <p className={styles.contactItem}>
                <span className={styles.icon}></span>
                {propertyConfig.address}
              </p>
              <p className={styles.contactItem}>
                <span className={styles.icon}></span>
                <a href={`tel:${propertyConfig.phone}`}>{propertyConfig.phone}</a>
              </p>
              <p className={styles.contactItem}>
                <span className={styles.icon}></span>
                <a href={`mailto:${propertyConfig.email}`}>{propertyConfig.email}</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.subheading}>Navigation</h4>
            <ul className={styles.linkList}>
              <li>
                <Link to="/floor-plans" className={styles.link}>
                  <span className={styles.arrow}>→</span> Floor Plans
                </Link>
              </li>
              <li>
                <Link to="/amenities" className={styles.link}>
                  <span className={styles.arrow}>→</span> Amenities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className={styles.link}>
                  <span className={styles.arrow}>→</span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/location" className={styles.link}>
                  <span className={styles.arrow}>→</span> Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Leasing Info */}
          <div>
            <h4 className={styles.subheading}>Office Hours</h4>
            <p className={styles.hours}>{propertyConfig.officeHours}</p>
            <p className={styles.note}>Call or visit us during office hours!</p>
            <a
              href={propertyConfig.applicantPortalURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '1rem', fontSize: '0.875rem' }}
            >
              Apply Now
            </a>
          </div>

          {/* Social Media */}
          <div>
            <h4 className={styles.subheading}>Connect With Us</h4>
            <div className={styles.socialLinks}>
              {propertyConfig.socialMedia?.facebook && (
                <a
                  href={propertyConfig.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="Facebook"
                >
                  f
                </a>
              )}
              {propertyConfig.socialMedia?.instagram && (
                <a
                  href={propertyConfig.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="Instagram"
                >
                  📷
                </a>
              )}
              {propertyConfig.socialMedia?.twitter && (
                <a
                  href={propertyConfig.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="Twitter"
                >
                  𝕏
                </a>
              )}
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; 2026 {propertyConfig.name}. All rights reserved.</p>
          <p className={styles.powered}>
            <span style={{ color: '#f97316' }}></span> Powered by U2 Applicant Portal
          </p>
        </div>
      </div>
    </footer>
  );
}
