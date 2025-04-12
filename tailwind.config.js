/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Common UI variables that map to our themed CSS variables
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        
        // Nord color palette - direct access to specific Nord colors
        nord: {
          // Polar Night
          0: "var(--nord0)",
          1: "var(--nord1)",
          2: "var(--nord2)",
          3: "var(--nord3)",
          
          // Snow Storm
          4: "var(--nord4)",
          5: "var(--nord5)",
          6: "var(--nord6)",
          
          // Frost
          7: "var(--nord7)",
          8: "var(--nord8)",
          9: "var(--nord9)",
          10: "var(--nord10)",
          
          // Aurora
          11: "var(--nord11)",
          12: "var(--nord12)",
          13: "var(--nord13)",
          14: "var(--nord14)",
          15: "var(--nord15)",
        },
        
        // Semantic color groups for easier usage
        "polar-night": {
          darkest: "var(--nord0)", 
          dark: "var(--nord1)",
          light: "var(--nord2)",
          lightest: "var(--nord3)",
        },
        "snow-storm": {
          darkest: "var(--nord4)",
          medium: "var(--nord5)",
          lightest: "var(--nord6)",
        },
        "frost": {
          teal: "var(--nord7)",
          light: "var(--nord8)",
          medium: "var(--nord9)",
          dark: "var(--nord10)",
        },
        "aurora": {
          red: "var(--nord11)",
          orange: "var(--nord12)",
          yellow: "var(--nord13)",
          green: "var(--nord14)",
          purple: "var(--nord15)",
        },
      },
    },
  },
  plugins: [],
};
