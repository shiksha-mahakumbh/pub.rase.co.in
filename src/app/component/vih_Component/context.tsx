"use client"
// cookiesContext.tsx
import React, { createContext, useState, useContext, SetStateAction, Dispatch } from 'react';

interface CookiesContextType {
  cookiesGlobal: string;
  setCookiesGlobal: Dispatch<SetStateAction<string>>;
}

const CookiesContext = createContext<CookiesContextType>({
  cookiesGlobal: '',
  setCookiesGlobal: () => {}, // Provide a default implementation
});

export const useCookiesContext = () => useContext(CookiesContext);

export default function CookiesProvider({ children} : {
    children: React.ReactNode
  }) {
  const [cookiesGlobal, setCookiesGlobal] = useState<string>('');

  return (
    <CookiesContext.Provider value={{ cookiesGlobal, setCookiesGlobal }}>
      {children}
    </CookiesContext.Provider>
  );
};
