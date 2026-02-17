# U2 Apartment Complex Brochure Template

A professional, responsive apartment complex brochure website template for Mesa Falls Apartments. Designed to be a white-labelable microservice that integrates with the U2 Applicant Portal.

## Overview

This is a modern React/TypeScript frontend application built with Vite and styled with Tailwind CSS. It provides a comprehensive brochure experience for apartment complexes with pages for floor plans, amenities, gallery, location, and contact information.

## Features

- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Modern UI**: Clean, professional aesthetic with smooth animations
- **Floor Plans**: Showcase multiple unit types with pricing and availability
- **Amenities Gallery**: Display community features with descriptions
- **Photo Gallery**: Interactive image gallery with filtering
- **Location Integration**: Map display and nearby attractions
- **Contact Forms**: Inquiry forms with email integration
- **U2 Portal Integration**: CTA buttons linking to Applicant Portal
- **White-Label Architecture**: Easy customization for different properties

## Project Structure

```
src/
├── pages/              # Page components (Home, FloorPlans, etc.)
├── components/         # Reusable components (Header, Footer, Cards, etc.)
├── config/            # Configuration files
│   ├── propertyData.ts    # Property-specific data (floor plans, amenities)
│   └── whiteLabel.ts      # White-label configuration system
├── types/             # TypeScript type definitions
└── styles/            # Additional CSS/styling files
```

## Pages

### Home (`/`)
- Hero section with main CTA
- Property overview
- Featured floor plans
- Featured amenities
- Call-to-action section

### Floor Plans (`/floor-plans`)
- All available floor plans
- Unit details (bed/bath, sq ft, price)
- Unit availability
- What's included information
- Contact CTA

### Amenities (`/amenities`)
- Complete list of amenities
- Detailed amenity descriptions
- Community features
- Pet policy
- Lifestyle sections

### Gallery (`/gallery`)
- Photo gallery with filtering (All, Interior, Exterior, Amenities)
- Expandable image viewer
- Image descriptions

### Location (`/location`)
- Map placeholder (ready for integration)
- Address and contact info
- Office hours
- Nearby attractions
- Neighborhood information

### Contact (`/contact`)
- Contact form with validation
- Multiple ways to get in touch
- Office hours
- Social media links
- Quick navigation links

### Apply Now
- CTA buttons link to external U2 Applicant Portal
- Configurable portal URL

## White-Label Customization

The template is designed to be easily customizable for different apartment complexes:

### Configuration Files

**Property Data** (`src/config/propertyData.ts`):
```typescript
- Property name, tagline, description
- Address, phone, email, office hours
- Applicant portal URL
- Color scheme
- Floor plans data
- Amenities list
- Gallery images
```

**White-Label Config** (`src/config/whiteLabel.ts`):
- Multiple property configurations
- Theme color definitions
- Helper functions for styling

### To Create a New Property Theme

1. Update `src/config/propertyData.ts`:
   - Change property name and details
   - Update floor plans
   - Update amenities
   - Add/update images

2. Update colors in `propertyConfig.colors`:
   - `primary`: Main brand color
   - `secondary`: Secondary brand color
   - `accent`: Highlight/CTA color
   - `text`: Text color
   - `background`: Background color

3. Update social media links if available

4. Add images to `public/images/` directory

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview

# Lint code
npm lint
```

## Development

The app uses:
- **React 19**: UI framework
- **React Router**: Page navigation
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool

### Component Architecture

**Header Component**: Navigation with active route highlighting
**Footer Component**: Company info, links, and contact details
**CTAButton**: Reusable call-to-action button with variants
**Card**: Reusable card component for displaying information
**HeroSection**: Reusable hero section with background image support

### Styling

All styling is done with Tailwind CSS utility classes. Custom styles can be added to:
- `src/index.css`: Global styles
- `src/App.css`: App-specific styles
- `src/styles/`: Additional CSS modules

## Integration with U2 Applicant Portal

All "Apply Now" buttons link to the URL specified in `propertyConfig.applicantPortalURL`. Update this URL in `src/config/propertyData.ts` to point to your U2 portal instance.

## Data Management

Currently, all data (floor plans, amenities, gallery images) is stored in `src/config/propertyData.ts` as static data. For future enhancements, this could be:
- Connected to a CMS
- Fetched from an API
- Loaded from a database

To modify property information, edit the relevant arrays in `propertyData.ts`.

## Image Assets

Add images to:
```
public/
├── images/
│   ├── hero-main.jpg          # Hero section background
│   ├── floor-plans/           # Floor plan preview images
│   ├── gallery/               # Gallery images
│   └── other/                 # Other images
└── logo.png
```

## Responsive Design

The template is fully responsive and tested on:
- Mobile (375px and up)
- Tablet (768px and up)
- Desktop (1024px and up)

### Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## Performance

- Fast initial load with Vite
- Optimized code splitting
- Image optimization ready
- CSS minification in production

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- Live chat integration
- Virtual tours (360° views)
- Real-time availability sync
- Appointment booking system
- Property management system integration
- Multi-language support
- SEO optimization
- Analytics integration
- Social media feed integration

## License

Proprietary - Part of U2 Applicant Platform

## Support

For support or customization requests, contact the development team.

---

**Built with ❤️ for Mesa Falls Apartments**
