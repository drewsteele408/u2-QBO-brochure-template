import type { PropertyConfig, FloorPlan, Amenity, GalleryImage } from '../types/index';

export interface PropertyData {
  propertyConfig: PropertyConfig;
  floorPlans: FloorPlan[];
  amenities: Amenity[];
  galleryImages: GalleryImage[];
}

/**
 * Available property identifiers
 */
export const AVAILABLE_PROPERTIES = ['mesa-falls', 'eden-apartments', 'providence-square'] as const;
export type PropertyId = (typeof AVAILABLE_PROPERTIES)[number];

/**
 * Property metadata for display in selector
 */
export interface PropertyMetadata {
  id: PropertyId;
  displayName: string;
  fileName: string;
}

export const PROPERTY_METADATA: Record<PropertyId, PropertyMetadata> = {
  'mesa-falls': {
    id: 'mesa-falls',
    displayName: 'Mesa Falls Apartments',
    fileName: 'mesa-falls.json',
  },
  'eden-apartments': {
    id: 'eden-apartments',
    displayName: 'Eden Apartments',
    fileName: 'eden-apartments.json',
  },
  'providence-square': {
    id: 'providence-square',
    displayName: 'Providence Square',
    fileName: 'providence-square.json',
  },
};

/**
 * Fetch property data from JSON file
 * @param propertyId - The property identifier
 * @returns Promise<PropertyData> - The loaded property data
 * @throws Error if file not found or JSON is invalid
 */
export async function loadPropertyData(propertyId: PropertyId): Promise<PropertyData> {
  const metadata = PROPERTY_METADATA[propertyId];

  if (!metadata) {
    throw new Error(`Unknown property: ${propertyId}`);
  }

  try {
    const response = await fetch(`/properties/${metadata.fileName}`);

    if (!response.ok) {
      throw new Error(`Failed to load property: ${response.status} ${response.statusText}`);
    }

    const data: PropertyData = await response.json();

    // Basic validation
    if (!data.propertyConfig || !data.floorPlans || !data.amenities || !data.galleryImages) {
      throw new Error('Invalid property data structure');
    }

    return data;
  } catch (error) {
    console.error(`Error loading property ${propertyId}:`, error);
    throw error;
  }
}

/**
 * Get list of all available properties for the selector
 */
export function getAvailableProperties(): PropertyMetadata[] {
  return AVAILABLE_PROPERTIES.map((id) => PROPERTY_METADATA[id]);
}

/**
 * Validate if a property ID exists
 */
export function isValidPropertyId(id: string): id is PropertyId {
  return AVAILABLE_PROPERTIES.includes(id as PropertyId);
}
