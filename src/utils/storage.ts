import { UserData } from '@/types';

const USER_KEY = 'user';
const TOKEN_KEY = 'token';

export const userLocalStorage = {
  getUser: (): UserData | undefined => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : undefined;
  },
  setUser: (user: UserData) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },
  removeUser: () => {
    localStorage.removeItem(USER_KEY);
  },
  getToken: (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  },
  removeToken: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
};
