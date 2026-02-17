import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import CTAButton from '../components/CTAButton';
import { amenities, propertyConfig } from '../config/propertyData';
import styles from './Amenities.module.css';

export default function Amenities() {
  return (
    <div className={styles.container}>
      <HeroSection title="Premium Amenities" subtitle="Experience luxury living" height="md" />

      <section className={styles.section}>
        <div className={styles.maxWidth}>
          <div className={styles.intro}>
            <p className={styles.introText}>
              At Mesa Falls Apartments, we believe that luxury extends beyond your unit. Our comprehensive amenities are designed to enhance your lifestyle and create an exceptional community experience.
            </p>
          </div>

          <div className={styles.amenitiesGrid}>
            {amenities.map((amenity) => (
              <Card key={amenity.id} title={amenity.name} description={amenity.description}>
                <p className={styles.amenityIcon}>{amenity.icon}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Amenities */}
      <section className={styles.sectionLight}>
        <div className={styles.maxWidth}>
          <h2 className={styles.detailedTitle}>Lifestyle Amenities</h2>

          <div className={styles.detailsContainer}>
            {/* Recreation */}
            <div className={styles.detailsRow}>
              <div className={styles.detailsContent}>
                <h3>🏊 Recreation & Wellness</h3>
                <p>
                  Unwind and stay active with our resort-style swimming pool, state-of-the-art fitness center, and yoga studio. Everything you need to maintain your healthy lifestyle.
                </p>
                <ul className={styles.detailsList}>
                  <li className={styles.detailsListItem}>✓ Olympic-sized pool with heated water</li>
                  <li className={styles.detailsListItem}>✓ Cardio and weight training equipment</li>
                  <li className={styles.detailsListItem}>✓ Yoga and wellness classes</li>
                  <li className={styles.detailsListItem}>✓ Sauna and spa facilities</li>
                </ul>
              </div>
              <div className={`${styles.detailsImage} ${styles.imageBlue}`}>
                <p>Recreation Image</p>
              </div>
            </div>

            {/* Community */}
            <div className={styles.detailsRowReverse}>
              <div className={`${styles.detailsImage} ${styles.imagePurple}`}>
                <p>Community Image</p>
              </div>
              <div className={styles.detailsContent}>
                <h3>🛋️ Community Spaces</h3>
                <p>
                  Connect with neighbors and enjoy life together in our thoughtfully designed community spaces. Perfect for events, gatherings, and making new friends.
                </p>
                <ul className={styles.detailsList}>
                  <li className={styles.detailsListItem}>✓ Community lounge and social area</li>
                  <li className={styles.detailsListItem}>✓ Rooftop terrace with views</li>
                  <li className={styles.detailsListItem}>✓ Monthly community events</li>
                  <li className={styles.detailsListItem}>✓ Pet park for furry friends</li>
                </ul>
              </div>
            </div>

            {/* Convenience */}
            <div className={styles.detailsRow}>
              <div className={styles.detailsContent}>
                <h3>💼 Convenience & Services</h3>
                <p>
                  We make modern living convenient with professional services and amenities designed for busy lifestyles.
                </p>
                <ul className={styles.detailsList}>
                  <li className={styles.detailsListItem}>✓ Covered parking included</li>
                  <li className={styles.detailsListItem}>✓ Co-working spaces with high-speed internet</li>
                  <li className={styles.detailsListItem}>✓ Concierge service</li>
                  <li className={styles.detailsListItem}>✓ 24/7 security and gated access</li>
                  <li className={styles.detailsListItem}>✓ Package receiving service</li>
                </ul>
              </div>
              <div className={`${styles.detailsImage} ${styles.imageOrange}`}>
                <p>Services Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Policy */}
      <section className={styles.section}>
        <div className={styles.petSection}>
          <h2 className={styles.petTitle}>🐾 Pet-Friendly Community</h2>
          <p className={styles.petDescription}>
            We understand that your pets are part of your family. Mesa Falls Apartments welcomes your furry friends with our pet-friendly policy.
          </p>
          <div className={styles.petBox}>
            <h3 className={styles.petBoxTitle}>Pet Policy</h3>
            <ul className={styles.petList}>
              <li>• Small pets welcome (dogs and cats)</li>
              <li>• Weight/breed restrictions apply</li>
              <li>• Pet parks available on-site</li>
              <li>• Grooming facility partnerships</li>
              <li>• Contact us for specific pet details</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.sectionCTA}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Experience Mesa Falls Living?</h2>
          <p className={styles.ctaSubtitle}>Schedule a tour of our amenities today!</p>
          <div className={styles.ctaButtons}>
            <CTAButton href={propertyConfig.applicantPortalURL} variant="primary" size="lg">
              Apply Now
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Schedule Tour
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
