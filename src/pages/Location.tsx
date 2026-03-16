import { useParams } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';
import { usePropertyConfig } from '../context/PropertyContext';
import styles from './Location.module.css';

export default function Location() {
  const { propertyId } = useParams<{ propertyId: string }>();
  const propertyConfig = usePropertyConfig();
  const basePath = propertyId ? `/${propertyId}` : '/';
  const nearbyAttractions = [
    {
      id: '1',
      name: 'Downtown Phoenix',
      distance: '2 miles',
      description: 'Shopping, dining, and entertainment district',
    },
    {
      id: '2',
      name: 'Phoenix Parks',
      distance: '0.5 miles',
      description: 'Beautiful parks and recreational areas',
    },
    {
      id: '3',
      name: 'Desert Sky Mall',
      distance: '1 mile',
      description: 'Premier shopping and retail center',
    },
    {
      id: '4',
      name: 'Hiking Trails',
      distance: '3 miles',
      description: 'Scenic desert hiking and outdoor activities',
    },
    {
      id: '5',
      name: 'Phoenix Airport',
      distance: '8 miles',
      description: 'Easy access to travel',
    },
    {
      id: '6',
      name: 'Business District',
      distance: '1.5 miles',
      description: 'Major employment and business centers',
    },
  ];

  return (
    <div className={styles.container}>
      <HeroSection title="Location" subtitle="Perfectly located in the heart of the valley" height="md" />

      <section className={styles.section}>
        <div className={styles.maxWidth}>
          {/* Map Section */}
          <div className={styles.mapSection}>
            <h2 className={styles.mapTitle}>Find Us on the Map</h2>
            <div className={styles.mapContainer}>
              <iframe
                title="Property Location Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(propertyConfig.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className={styles.infoBox}>
              <h3 className={styles.infoBoxTitle}>Address</h3>
              <p className={styles.infoBoxText}>{propertyConfig.address}</p>
              <h3 className={styles.infoBoxTitle}>Contact</h3>
              <p className={styles.infoBoxText}>
                Phone: <a href={`tel:${propertyConfig.phone}`} className={styles.infoLink}>{propertyConfig.phone}</a>
              </p>
              <p className={styles.infoBoxText}>
                Email: <a href={`mailto:${propertyConfig.email}`} className={styles.infoLink}>{propertyConfig.email}</a>
              </p>
            </div>
          </div>

          {/* Nearby Attractions
          <div className={styles.attractionsSection}>
            <h2 className={styles.mapTitle}>Nearby Attractions</h2>
            <div className={styles.attractionGrid}>
              {nearbyAttractions.map((attraction) => (
                <Card
                  key={attraction.id}
                  title={attraction.name}
                  description={attraction.description}
                >
                  <p style={{ color: '#2563eb', fontWeight: '600', fontSize: '0.875rem' }}>{attraction.distance} away</p>
                </Card>
              ))}
            </div>
          </div> */}

          {/* Office Hours */}
          <div className={styles.officeHoursBox}>
            <h2 className={styles.officeHoursTitle}>Office Hours</h2>
            <div className={styles.officeHoursContent}>
              <div className={styles.officeHoursGrid}>
                <div className={styles.officeHoursColumn}>
                  <h3>Leasing Office Hours</h3>
                  <p>{propertyConfig.officeHours}</p>
                  <p className={styles.officeHoursNote}>Holiday hours may vary</p>
                </div>
                <div className={styles.officeHoursColumn}>
                  <h3>Maintenance & Support</h3>
                  <p>24/7 Emergency Maintenance</p>
                  <p className={styles.officeHoursNote}>Contact maintenance immediately for emergencies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transportation Info */}
          <div className={styles.transportationSection}>
            <h2 className={styles.transportationTitle}>Getting Around</h2>
            <div className={styles.transportationGrid}>
              <Card title="Public Transit" description="Easy access to bus routes and Phoenix light rail system">
                <p className={styles.transportationIcon}></p>
              </Card>
              <Card title="Walkability" description="Close to shops, restaurants, and parks">
                <p className={styles.transportationIcon}></p>
              </Card>
              <Card title="Parking" description="Covered parking included in every unit">
                <p className={styles.transportationIcon}></p>
              </Card>
            </div>
          </div>

          /* Neighborhood Info
          
        </div> 
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Plan Your Visit Today</h2>
        <p className={styles.ctaSubtitle}>
          Visit us in person and discover why {propertyConfig.name} is the perfect place to call home!
        </p>
        <CTAButton href={`${basePath}/contact`} variant="primary" size="lg">
          Schedule a Tour
        </CTAButton>
      </section>
    </div>
  );
}
