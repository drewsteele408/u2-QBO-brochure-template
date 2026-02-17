import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import CTAButton from '../components/CTAButton';
import { propertyConfig } from '../config/propertyData';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'inquiry',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      subject: 'inquiry',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className={styles.container}>
      <HeroSection title="Contact Us" subtitle="Get in touch with the Mesa Falls team" height="md" />

      <section className={styles.section}>
        <div className={styles.maxWidth}>
          <div className={styles.contentGrid}>
            {/* Contact Information */}
            <div className={styles.infoSection}>
              <h2>Get in Touch</h2>

              <div className={styles.infoBlock}>
                {/* Phone */}
                <div className={styles.infoItem}>
                  <h3>📞 Phone</h3>
                  <a
                    href={`tel:${propertyConfig.phone}`}
                    className={styles.infoLink}
                  >
                    {propertyConfig.phone}
                  </a>
                  <p className={styles.subtext}>Call us during office hours</p>
                </div>

                {/* Email */}
                <div className={styles.infoItem}>
                  <h3>✉️ Email</h3>
                  <a
                    href={`mailto:${propertyConfig.email}`}
                    className={styles.infoLink}
                  >
                    {propertyConfig.email}
                  </a>
                  <p className={styles.subtext}>We typically respond within 1 business day</p>
                </div>

                {/* Office Hours */}
                <div className={styles.infoItem}>
                  <h3>⏰ Office Hours</h3>
                  <p className={styles.contactText}>{propertyConfig.officeHours}</p>
                  <p className={styles.subtext}>Visit us in person anytime during these hours</p>
                </div>

                {/* Address */}
                <div className={styles.infoItem}>
                  <h3>📍 Address</h3>
                  <p className={styles.contactText}>{propertyConfig.address}</p>
                </div>

                {/* Social Media */}
                <div className={styles.infoItem}>
                  <h3>Follow Us</h3>
                  <div className={styles.socialLinks}>
                    {propertyConfig.socialMedia?.facebook && (
                      <a
                        href={propertyConfig.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialLink} ${styles.socialLinkFacebook}`}
                      >
                        Facebook
                      </a>
                    )}
                    {propertyConfig.socialMedia?.instagram && (
                      <a
                        href={propertyConfig.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialLink} ${styles.socialLinkInstagram}`}
                      >
                        Instagram
                      </a>
                    )}
                    {propertyConfig.socialMedia?.twitter && (
                      <a
                        href={propertyConfig.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialLink} ${styles.socialLinkTwitter}`}
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formSection}>
              <h2>Send us a Message</h2>

              {submitted && (
                <div className={styles.successMessage}>
                  ✓ Thank you for reaching out! We'll get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Your name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Your email"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your phone number"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="inquiry">General Inquiry</option>
                    <option value="tour">Schedule a Tour</option>
                    <option value="application">Application Question</option>
                    <option value="maintenance">Maintenance Issue</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                    placeholder="Your message..."
                  />
                </div>

                <CTAButton type="submit" variant="primary" size="lg" className={styles.submitButton}>
                  Send Message
                </CTAButton>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className={styles.quickLinksSection}>
        <h2 className={styles.quickLinksTitle}>Quick Links</h2>
        <div className={styles.quickLinksGrid}>
          <CTAButton href="/floor-plans" variant="outline" className={styles.quickLink}>
            View Floor Plans
          </CTAButton>
          <CTAButton href="/amenities" variant="outline" className={styles.quickLink}>
            Explore Amenities
          </CTAButton>
          <CTAButton href="/gallery" variant="outline" className={styles.quickLink}>
            Browse Gallery
          </CTAButton>
          <CTAButton href={propertyConfig.applicantPortalURL} variant="primary" className={styles.quickLink}>
            Apply Now
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
