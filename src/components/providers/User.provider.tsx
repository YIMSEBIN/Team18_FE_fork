import { UserData } from '@/types';
import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react';

interface UserContextType {
  user: UserData | null;
  setUser: Dispatch<React.SetStateAction<UserData | null>>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');

    if (userData) {
      setUser(JSON.parse(userData));
    }

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'user') {
        const updatedUser = event.newValue ? JSON.parse(event.newValue) : null;
        setUser(updatedUser);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
