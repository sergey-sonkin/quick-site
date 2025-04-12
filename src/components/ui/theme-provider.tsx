"use client";

import { createContext, useContext, useEffect, useState } from "react";

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
    script.innerHTML = `
      (function() {
        try {
          const savedTheme = localStorage.getItem("theme");
          const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          
          let theme = "light";
          if (savedTheme === "dark" || (savedTheme === "system" && systemPrefersDark) || (!savedTheme && systemPrefersDark)) {
            theme = "dark";
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
          document.documentElement.style.visibility = "visible";
        } catch (e) {
          console.error("Theme initialization failed:", e);
        }
      })();
    `;
    document.head.prepend(script);

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const applyTheme = () => {
      if (theme === "system") {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        document.documentElement.classList.toggle("dark", systemPrefersDark);
      } else {
        document.documentElement.classList.toggle("dark", theme === "dark");
      }
    };

    applyTheme();

    // Save to localStorage
    localStorage.setItem("theme", theme);

    // Listen for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyTheme();
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
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
