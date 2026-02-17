import HeroSection from '../components/HeroSection';
import CTAButton from '../components/CTAButton';
import Card from '../components/Card';
import { propertyConfig, amenities, floorPlans } from '../config/propertyData';
import styles from './Home.module.css';

export default function Home() {
  const featuredAmenities = amenities.slice(0, 6);
  const featuredPlans = floorPlans.slice(0, 3);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <HeroSection
        title={propertyConfig.name}
        subtitle={propertyConfig.tagline}
        backgroundImage={propertyConfig.images.hero}
      >
        <div className={styles.heroButtons}>
          <CTAButton href={propertyConfig.applicantPortalURL} variant="primary" size="lg">
            Apply Now
          </CTAButton>
          <CTAButton href="/floor-plans" variant="secondary" size="lg">
            View Floor Plans
          </CTAButton>
        </div>
      </HeroSection>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.maxWidth}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2>Welcome to {propertyConfig.name}</h2>
              <p>
                {propertyConfig.description}
              </p>
              <p>
                Located in the heart of the valley, Mesa Falls Apartments offers the perfect blend of modern living and community comfort. Whether you're a young professional, a growing family, or anyone seeking quality apartment living, we have the perfect home for you.
              </p>
              <CTAButton href="/floor-plans" variant="secondary" size="md">
                Explore Floor Plans
              </CTAButton>
            </div>
            <div className={styles.aboutImage}>
              Community Overview
            </div>
          </div>
        </div>
      </section>

      {/* Featured Floor Plans */}
      <section className={styles.sectionLight}>
        <div className={styles.maxWidth}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Thoughtfully Designed Floor Plans</h2>
            <p className={styles.sectionSubtitle}>Choose from our variety of spacious, modern floor plans tailored to fit your lifestyle.</p>
          </div>
          <div className={styles.plansGrid}>
            {featuredPlans.map((plan) => (
              <Card key={plan.id} title={plan.name} image={plan.image}>
                <div className={styles.cardContent}>
                  <div className={styles.planHeader}>
                    {plan.bedrooms === 0 ? (
                      <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>Studio Apartment</p>
                    ) : (
                      <p className={styles.planDetails}>
                        <span className={styles.label}>{plan.bedrooms}</span> Beds · <span className={styles.label}>{plan.bathrooms}</span> Baths
                      </p>
                    )}
                    <p className={styles.planSquareFeet}>{plan.squareFeet.toLocaleString()} sq ft</p>
                  </div>

                  <div>
                    <p className={styles.planPrice}>{plan.price}</p>
                    <p className={styles.planAvailability}>
                      {plan.availability > 0
                        ? `${plan.availability} units available`
                        : 'Coming soon'}
                    </p>
                  </div>

                  {plan.description && (
                    <p className={styles.planDescription}>{plan.description}</p>
                  )}

                  <CTAButton
                    href={propertyConfig.applicantPortalURL}
                    variant="primary"
                    size="sm"
                    className={styles.planButton}
                  >
                    Apply Now
                  </CTAButton>
                </div>
              </Card>
            ))}
          </div>
          <div className={styles.viewMoreButtons}>
            <CTAButton href="/floor-plans" variant="outline" size="md">
              View All Floor Plans →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Featured Amenities */}
      <section className={styles.section}>
        <div className={styles.maxWidth}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Premium Amenities</h2>
            <p className={styles.sectionSubtitle}>Experience luxury living with our world-class amenities designed for your lifestyle.</p>
          </div>
          <div className={styles.amenitiesGrid}>
            {featuredAmenities.map((amenity) => (
              <Card key={amenity.id} title={amenity.name} description={amenity.description}>
                <p className={styles.amenityIcon}>{amenity.icon}</p>
              </Card>
            ))}
          </div>
          <div className={styles.viewMoreButtons}>
            <CTAButton href="/amenities" variant="outline" size="md">
              View All Amenities →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.sectionCTA}>
        <div className={`${styles.maxWidth} ${styles.sectionHeader}`}>
          <h2 className={styles.sectionTitle}>Ready to Make Mesa Falls Your Home?</h2>
          <p className={styles.sectionSubtitle}>Start your application today and join our thriving community of residents!</p>
          <div className={styles.ctaButtons}>
            <CTAButton href={propertyConfig.applicantPortalURL} variant="primary" size="lg">
              Apply Now
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Schedule a Tour
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
