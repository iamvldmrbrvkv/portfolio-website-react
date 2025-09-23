import React, { useEffect, useState } from 'react';
import { DarkModeContext } from './DarkModeContext';

interface DarkModeProviderProps {
  children: React.ReactNode;
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkTheme');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkTheme', isDark.toString());
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};