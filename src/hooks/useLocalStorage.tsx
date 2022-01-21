import { createContext, ReactNode, useContext, useState } from 'react';

type LocalStorageProviderProps = {
  children: ReactNode;
};

export type LocalStorageData = {
  name: string;
  profession: string;
  number: string;
  ip: string;
};

type LocalStorageContextData = {
  createLocalStorage: (data: LocalStorageData) => void;
  clearLocalStorage: () => void;
  userData: LocalStorageData;
};

const LocalStorageContext = createContext<LocalStorageContextData>(
  {} as LocalStorageContextData,
);

export const LocalStorageProvider = ({
  children,
}: LocalStorageProviderProps) => {
  const [userData, setUserData] = useState<LocalStorageData | undefined>(() => {
    try {
      const value = localStorage.getItem('user');
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  });

  const createLocalStorage = (data: LocalStorageData) => {
    localStorage.setItem('user', JSON.stringify(data));
    setUserData(userData);
  };

  const clearLocalStorage = () => {
    setUserData(null);
    localStorage.removeItem('user');
  };

  return (
    <LocalStorageContext.Provider
      value={{ createLocalStorage, clearLocalStorage, userData }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};

export function useLocalStorage() {
  const context = useContext(LocalStorageContext);

  return context;
}
