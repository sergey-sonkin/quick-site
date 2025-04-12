"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getThemeInitScript } from "@/lib/theme-script";

type Theme = "light" | "dark" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// Create context
const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // Add script to avoid flash of unstyled content
    const script = document.createElement("script");
    script.innerHTML = getThemeInitScript();
    document.head.prepend(script);

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const applyTheme = () => {
      let systemPrefersDark = false;

      // Try to detect system preference, default to dark if not available
      try {
        systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
      } catch {  // Removed unused 'e' variable
        // If system preference detection fails, default to dark
        systemPrefersDark = true;
      }

      if (theme === "system") {
        document.documentElement.classList.toggle("dark", systemPrefersDark);
      } else {
        document.documentElement.classList.toggle("dark", theme === "dark");
      }
    };

    applyTheme();

    // Save to localStorage
    localStorage.setItem("theme", theme);

    // Listen for system preference changes
    try {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        if (theme === "system") {
          applyTheme();
        }
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } catch {  // Removed unused 'e' variable
      // If media query isn't supported, we won't set up the listener
      console.warn("Media query for dark mode not supported");
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
