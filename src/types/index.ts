export interface FloorPlan {
  id: string;
  name: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  price: string;
  availability: number;
  image: string;
  description?: string;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  description?: string;
  image: string;
  category: 'interior' | 'exterior' | 'amenity';
}

export interface PropertyConfig {
  name: string;
  tagline: string;
  description: string;
  logo?: string;
  address: string;
  phone: string;
  email: string;
  officeHours: string;
  applicantPortalURL: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  images: {
    hero: string;
  };
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}
