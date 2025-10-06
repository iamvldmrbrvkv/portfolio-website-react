import React, { useEffect, useState } from "react";
import { DarkModeContext } from "./DarkModeContext";
import type { ThemeMode } from "./DarkModeContext";

interface DarkModeProviderProps {
  children: React.ReactNode;
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") return "light";
    if (saved === "dark") return "dark";
    return "system";
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const applyTheme = () => {
    const shouldBeDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", shouldBeDark);
    setIsDark(shouldBeDark);
  };

  useEffect(() => {
    switch (themeMode) {
      case "light":
        localStorage.theme = "light";
        break;
      case "dark":
        localStorage.theme = "dark";
        break;
      case "system":
        localStorage.removeItem("theme");
        break;
    }

    applyTheme();
  }, [themeMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (!("theme" in localStorage)) {
        applyTheme();
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

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
