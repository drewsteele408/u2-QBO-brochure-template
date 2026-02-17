/**
 * White-Label Property Configuration
 * 
 * This file contains the configuration for the apartment complex brochure website.
 * To customize for a different property, simply update the values below.
 * 
 * Usage:
 * - Copy this file to create new property configs
 * - Import the config throughout the app
 * - All colors, content, and branding can be customized here
 */

const propertyConfigs = {
  'mesa-falls': {
    name: 'Mesa Falls Apartments',
    tagline: 'Modern Living in the Heart of the Valley',
    description: 'Experience luxury apartment living at Mesa Falls Apartments. Our community offers contemporary floor plans, premium amenities, and exceptional service.',
    address: '123 Mesa Ridge Drive, Phoenix, AZ 85001',
    phone: '(602) 555-0123',
    email: 'info@mesafallsapts.com',
    officeHours: 'Mon-Fri: 9AM-6PM, Sat-Sun: 10AM-5PM',
    applicantPortalURL: 'https://u2-portal.example.com',
    colors: {
      primary: '#1e40af',      // Blue
      secondary: '#7c3aed',    // Purple
      accent: '#f97316',       // Orange
      text: '#1f2937',         // Dark Gray
      background: '#ffffff',   // White
    },
    images: {
      hero: '/images/hero-main.jpg',
      logo: '/logo.png',
    },
    socialMedia: {
      facebook: 'https://facebook.com/mesafallsapts',
      instagram: 'https://instagram.com/mesafallsapts',
      twitter: 'https://twitter.com/mesafallsapts',
    },
    // Company Details for Footer
    companyName: 'Mesa Falls Management LLC',
  },
};

export type PropertyKey = keyof typeof propertyConfigs;

/**
 * Get the active property configuration
 * In production, this could be set via environment variables or query parameters
 */
export function getPropertyConfig(propertyKey: PropertyKey = 'mesa-falls') {
  return propertyConfigs[propertyKey];
}

/**
 * Helper function to generate CSS variables from the config
 * Useful for applying theme colors throughout the site
 */
export function generateThemeStyles(config: typeof propertyConfigs['mesa-falls']) {
  return {
    '--primary': config.colors.primary,
    '--secondary': config.colors.secondary,
    '--accent': config.colors.accent,
    '--text': config.colors.text,
    '--background': config.colors.background,
  } as React.CSSProperties;
}

export default propertyConfigs;
