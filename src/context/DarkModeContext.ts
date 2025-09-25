import { createContext } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface DarkModeContextType {
  isDark: boolean;
  themeMode: ThemeMode;
  toggleThemeMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);