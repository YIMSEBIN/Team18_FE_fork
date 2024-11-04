import { userLocalStorage } from '@/utils/storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type LanguageContextType = {
  language: string | null;
  setLanguage: (language: string | null) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string | null>(() => userLocalStorage.getLanguage());

  useEffect(() => {
    const changeLanguage = () => {
      const updatedLanguage = userLocalStorage.getLanguage();
      setLanguage(updatedLanguage);
    };

    window.addEventListener('storage', changeLanguage);
    return () => window.removeEventListener('storage', changeLanguage);
  }, []);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
