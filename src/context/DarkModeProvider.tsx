import React, { useEffect, useState } from "react";
import { DarkModeContext } from "./DarkModeContext";
import type { ThemeMode } from "./DarkModeContext";

interface DarkModeProviderProps {
  children: React.ReactNode;
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("themeMode") as ThemeMode;
    return saved || "system";
  });

  const [isDark, setIsDark] = useState<boolean>(false);

  const getSystemTheme = (): boolean => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    let newIsDark: boolean;

    switch (themeMode) {
      case "light":
        newIsDark = false;
        break;
      case "dark":
        newIsDark = true;
        break;
      case "system":
        newIsDark = getSystemTheme();
        break;
      default:
        newIsDark = false;
    }

    setIsDark(newIsDark);
    applyTheme(newIsDark);
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  useEffect(() => {
    if (themeMode === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleChange = () => {
        const systemDark = getSystemTheme();
        setIsDark(systemDark);
        applyTheme(systemDark);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [themeMode]);

  const toggleThemeMode = () => {
    setThemeMode((current) => {
      switch (current) {
        case "light":
          return "dark";
        case "dark":
          return "system";
        case "system":
          return "light";
        default:
          return "light";
      }
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDark, themeMode, toggleThemeMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
