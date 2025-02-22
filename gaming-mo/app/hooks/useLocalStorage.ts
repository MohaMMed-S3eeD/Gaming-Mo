import { useState, useEffect } from 'react';
import { browserStorage } from '@/utils/browserStorage';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure this runs only on the client side

    try {
      const item = browserStorage.get(key);
      if (item !== null) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error('Error reading from storage:', error);
    } finally {
      setIsLoaded(true);
    }
  }, [key]);

  const setValue = (value: T) => {
    if (typeof window === 'undefined') return; // Ensure this runs only on the client side

    try {
      setStoredValue(value);
      browserStorage.set(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to storage:', error);
    }
  };

  return { value: storedValue, setValue, isLoaded };
}
