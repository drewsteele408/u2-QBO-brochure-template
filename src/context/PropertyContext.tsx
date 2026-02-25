import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import { loadPropertyData, type PropertyData, type PropertyId } from '../services/propertyLoader';

interface PropertyContextType {
  propertyId: PropertyId | null;
  propertyData: PropertyData | null;
  isLoading: boolean;
  error: string | null;
  loadProperty: (id: PropertyId) => Promise<void>;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export interface PropertyProviderProps {
  children: ReactNode;
  defaultProperty?: PropertyId;
}

/**
 * PropertyProvider wraps the app and provides property data to all components
 */
export function PropertyProvider({ children, defaultProperty = 'mesa-falls' }: PropertyProviderProps) {
  const [propertyId, setPropertyId] = useState<PropertyId | null>(defaultProperty);
  const [propertyData, setPropertyData] = useState<PropertyData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadProperty = useCallback(async (id: PropertyId) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await loadPropertyData(id);
      setPropertyId(id);
      setPropertyData(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load property';
      setError(message);
      console.error('Property loading error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load default property on mount
  useEffect(() => {
    if (defaultProperty && !propertyData) {
      loadProperty(defaultProperty);
    }
  }, [defaultProperty, propertyData, loadProperty]);

  return (
    <PropertyContext.Provider value={{ propertyId, propertyData, isLoading, error, loadProperty }}>
      {children}
    </PropertyContext.Provider>
  );
}

/**
 * Hook to use property context
 * @throws Error if used outside PropertyProvider
 */
export function useProperty(): PropertyContextType {
  const context = useContext(PropertyContext);

  if (context === undefined) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }

  return context;
}

/**
 * Hook to get just the property data
 * Convenience hook that throws error if data is not loaded
 */
export function usePropertyData(): PropertyData {
  const { propertyData, error } = useProperty();

  if (error) {
    throw new Error(`Property loading failed: ${error}`);
  }

  if (!propertyData) {
    throw new Error('Property data not loaded');
  }

  return propertyData;
}

/**
 * Hook to get just the property config
 */
export function usePropertyConfig() {
  const data = usePropertyData();
  return data.propertyConfig;
}

/**
 * Hook to get floor plans
 */
export function useFloorPlans() {
  const data = usePropertyData();
  return data.floorPlans;
}

/**
 * Hook to get amenities
 */
export function useAmenities() {
  const data = usePropertyData();
  return data.amenities;
}

/**
 * Hook to get gallery images
 */
export function useGalleryImages() {
  const data = usePropertyData();
  return data.galleryImages;
}
