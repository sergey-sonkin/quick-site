/**
 * This script handles theme initialization before React hydration
 * It runs directly in the browser to prevent flash of unstyled content
 *
 * The function is designed to be converted to a string and inserted as an inline script
 */

export function getThemeInitScript(): string {
  // This will be converted to a string and run as an inline script
  const themeScript = () => {
    try {
      const savedTheme = localStorage.getItem("theme");
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

      // Default to dark mode if needed
      if (savedTheme === "light") {
        document.documentElement.classList.remove("dark");
      } else if (savedTheme === "system") {
        // Use system preference, with dark as the fallback
        document.documentElement.classList.toggle("dark", systemPrefersDark);
      } else {
        // No saved theme or saved as dark - use dark mode
        document.documentElement.classList.add("dark");
      }
      document.documentElement.style.visibility = "visible";
    } catch (e) {
      // If anything fails, default to dark mode
      document.documentElement.classList.add("dark");
      document.documentElement.style.visibility = "visible";
      console.error("Theme initialization failed:", e);
    }
  };

  // Convert the function to a self-executing string
  return `(${themeScript.toString()})();`;
}
