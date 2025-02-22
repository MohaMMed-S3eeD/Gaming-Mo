const isBrowser = typeof window !== 'undefined';

export const browserStorage = {
  get: (key: string): string | null => {
    try {
      if (!isBrowser) return null;
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },

  set: (key: string, value: string): boolean => {
    try {
      if (!isBrowser) return false;
      window.localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },

  remove: (key: string): boolean => {
    try {
      if (!isBrowser) return false;
      window.localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  }
};
