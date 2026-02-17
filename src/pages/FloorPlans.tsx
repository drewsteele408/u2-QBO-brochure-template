import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';
import { floorPlans, propertyConfig } from '../config/propertyData';
import styles from './FloorPlans.module.css';

export default function FloorPlans() {
  return (
    <div className={styles.container}>
      <HeroSection title="Floor Plans" subtitle="Find your perfect fit" height="md" />

      <section className={styles.section}>
        <div className={styles.maxWidthLarge}>
          <div className={styles.intro}>
            <p className={styles.introText}>
              We offer a variety of floor plans designed to meet every lifestyle and budget. From cozy studios to spacious three-bedroom units, each apartment is thoughtfully designed with modern finishes and premium amenities.
            </p>
          </div>

          <div className={styles.grid}>
            {floorPlans.map((plan) => (
              <Card key={plan.id} title={plan.name} image={plan.image}>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    {plan.bedrooms === 0 ? (
                      <p className={styles.cardDetails}><span className={styles.cardLabel}>Studio</span></p>
                    ) : (
                      <p className={styles.cardDetails}><span className={styles.cardLabel}>{plan.bedrooms}</span> Bed / <span className={styles.cardLabel}>{plan.bathrooms}</span> Bath</p>
                    )}
                    <p className={styles.cardSqft}>{plan.squareFeet.toLocaleString()} sq ft</p>
                  </div>

                  <div>
                    <p className={styles.cardPrice}>{plan.price}</p>
                    <p className={styles.cardAvailability}>
                      {plan.availability > 0
                        ? `${plan.availability} available`
                        : 'Coming soon'}
                    </p>
                  </div>

                  {plan.description && (
                    <p className={styles.cardDescription}>{plan.description}</p>
                  )}

                  <CTAButton
                    href={propertyConfig.applicantPortalURL}
                    variant="secondary"
                    size="sm"
                    className={styles.cardButton}
                  >
                    Apply Now
                  </CTAButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className={styles.sectionLight}>
        <div className={styles.infoSection}>
          <h2 className={styles.infoTitle}>What's Included</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoColumn}>
              <h3>In Every Unit</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>Modern kitchen with stainless steel appliances</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>In-unit washer and dryer</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>Granite countertops</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>Walk-in closets</span>
                </li>
              </ul>
            </div>
            <div className={styles.infoColumn}>
              <h3>Community Features</h3>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>Resort-style swimming pool</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>State-of-the-art fitness center</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>Covered parking included</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span>24/7 professional security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Schedule a Tour?</h2>
          <p className={styles.ctaSubtitle}>Contact our leasing office or apply online to get started.</p>
          <div className={styles.ctaButtons}>
            <CTAButton href={propertyConfig.applicantPortalURL} variant="primary" size="lg">
              Apply Now
            </CTAButton>
            <CTAButton href="/contact" variant="outline" size="lg">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
