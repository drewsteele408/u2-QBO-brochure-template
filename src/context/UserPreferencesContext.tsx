import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import axios from 'axios';

interface UserPreferencesContextType {
  userId: string | null;
  darkMode: boolean;
  isLoading: boolean;
  error: string | null;
  toggleDarkMode: () => Promise<void>;
}

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

export interface UserPreferencesProviderProps {
  children: ReactNode;
  apiBaseUrl?: string;
}

/**
 * Generate or retrieve a unique user ID from localStorage
 */
function getUserId(): string {
  const storageKey = 'u2_user_id';
  let userId = localStorage.getItem(storageKey);

  if (!userId) {
    // Generate UUID v4
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    const hexArray: string[] = [];
    for (let i = 0; i < bytes.length; i++) {
      let byte = bytes[i];
      if (i === 6) {
        byte = (byte & 0x0f) | 0x40;
      } else if (i === 8) {
        byte = (byte & 0x3f) | 0x80;
      }
      hexArray.push(byte.toString(16).padStart(2, '0'));
    }
    userId = 'u2_' + hexArray.join('').substring(0, 32);

    localStorage.setItem(storageKey, userId);
  }

  return userId;
}

/**
 * UserPreferencesProvider wraps the app and provides user preferences to all components
 */
export function UserPreferencesProvider({ children, apiBaseUrl = 'http://localhost:5000' }: UserPreferencesProviderProps) {
  const [userId, setUserId] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize userId on mount
  useEffect(() => {
    const id = getUserId();
    setUserId(id);
  }, []);

  // Fetch user preferences when userId is set
  useEffect(() => {
    if (!userId) return;

    const fetchPreferences = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get(`${apiBaseUrl}/api/preferences/dark-mode/${userId}`);
        const { darkMode: savedDarkMode } = response.data;

        setDarkMode(savedDarkMode);
        applyDarkMode(savedDarkMode);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to fetch preferences';
        setError(message);
        console.error('Preferences loading error:', err);
        // Continue with default (light mode) on error
        setDarkMode(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPreferences();
  }, [userId]);

  // Apply dark mode class to document
  const applyDarkMode = (isDark: boolean) => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  };

  // Toggle dark mode and persist to MongoDB
  const toggleDarkMode = useCallback(async () => {
    if (!userId) {
      console.error('User ID not initialized');
      return;
    }

    try {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);
      applyDarkMode(newDarkMode);

      // Persist to database
      await axios.post(`${apiBaseUrl}/api/preferences/dark-mode`, {
        userId,
        darkMode: newDarkMode,
      });
    } catch (err) {
      // Revert state on error
      setDarkMode(!darkMode);
      applyDarkMode(!darkMode);

      const message = err instanceof Error ? err.message : 'Failed to save preference';
      setError(message);
      console.error('Error saving preference:', err);
    }
  }, [userId, darkMode]);

  return (
    <UserPreferencesContext.Provider
      value={{
        userId,
        darkMode,
        isLoading,
        error,
        toggleDarkMode,
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
}

/**
 * Hook to use user preferences context
 */
export function useUserPreferences(): UserPreferencesContextType {
  const context = useContext(UserPreferencesContext);

  if (!context) {
    throw new Error('useUserPreferences must be used within UserPreferencesProvider');
  }

  return context;
}
