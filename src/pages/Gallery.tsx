import { useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CTAButton from '../components/CTAButton';
import { useGalleryImages, usePropertyConfig } from '../context/PropertyContext';
import styles from './Gallery.module.css';

export default function Gallery() {
  const { propertyId } = useParams<{ propertyId: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const galleryImages = useGalleryImages();
  const propertyConfig = usePropertyConfig();
  const basePath = propertyId ? `/${propertyId}` : '/';

  const filteredImages =
    activeFilter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <div className={styles.container}>
      <HeroSection title="Photo Gallery" subtitle="Explore Mesa Falls Apartments" height="md" />

      <section className={styles.section}>
        <div className={styles.maxWidth}>
          <div className={styles.intro}>
            <p className={styles.introText}>
              Take a virtual tour of Mesa Falls Apartments and see for yourself why residents love calling us home.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className={styles.filterContainer}>
            <button
              onClick={() => setActiveFilter('all')}
              className={`${styles.filterButton} ${
                activeFilter === 'all' ? styles.filterButtonActive : styles.filterButtonInactive
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('interior')}
              className={`${styles.filterButton} ${
                activeFilter === 'interior' ? styles.filterButtonActive : styles.filterButtonInactive
              }`}
            >
              Interior
            </button>
            <button
              onClick={() => setActiveFilter('exterior')}
              className={`${styles.filterButton} ${
                activeFilter === 'exterior' ? styles.filterButtonActive : styles.filterButtonInactive
              }`}
            >
              Exterior
            </button>
            <button
              onClick={() => setActiveFilter('amenity')}
              className={`${styles.filterButton} ${
                activeFilter === 'amenity' ? styles.filterButtonActive : styles.filterButtonInactive
              }`}
            >
              Amenities
            </button>
          </div>

          {/* Gallery Grid */}
          <div className={styles.gallery}>
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image.image)}
                className={styles.galleryItem}
              >
                <img
                  src={image.image}
                  alt={image.title}
                />
                <div className={styles.galleryOverlay}>
                  <h3 className={styles.galleryOverlayTitle}>{image.title}</h3>
                  {image.description && <p className={styles.galleryOverlayDescription}>{image.description}</p>}
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className={styles.emptyState}>
              <p>No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for full image view */}
      {selectedImage && (
        <div
          className={styles.modal}
          onClick={() => setSelectedImage(null)}
        >
          <div>
            <img
              src={selectedImage}
              alt="Full view"
              className={styles.modalImage}
            />
          </div>
          <button
            className={styles.modalCloseButton}
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}

      {/* Virtual Tour CTA */}
      <section className={styles.sectionLight}>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Want More? Schedule a Personal Tour</h2>
          <p className={styles.ctaSubtitle}>
            Experience {propertyConfig.name} in person. Our leasing team is ready to show you around and answer any questions.
          </p>
          <div className={styles.ctaButtons}>
            <CTAButton href={`${basePath}/contact`} variant="primary" size="lg">
              Schedule Tour
            </CTAButton>
            <CTAButton href={propertyConfig.applicantPortalURL} variant="outline" size="lg">
              Apply Now
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
