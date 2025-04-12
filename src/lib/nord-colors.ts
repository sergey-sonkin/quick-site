/**
 * Nord color palette utility
 * Based on https://www.nordtheme.com/docs/colors-and-palettes
 */

// Type definitions for Nord color groups
export type PolarNightColor = "nord0" | "nord1" | "nord2" | "nord3";
export type SnowStormColor = "nord4" | "nord5" | "nord6";
export type FrostColor = "nord7" | "nord8" | "nord9" | "nord10";
export type AuroraColor = "nord11" | "nord12" | "nord13" | "nord14" | "nord15";
export type NordColorKey =
  | PolarNightColor
  | SnowStormColor
  | FrostColor
  | AuroraColor;

// Hexadecimal color values
export const NordColors = {
  // Polar Night (dark theme background)
  polarNight: {
    nord0: "#2E3440", // Darkest background color
    nord1: "#3B4252", // Lighter shade for UI elements
    nord2: "#434C5E", // Even lighter shade for active elements
    nord3: "#4C566A", // Lightest shade for text and UI elements
  },

  // Snow Storm (light theme background)
  snowStorm: {
    nord4: "#D8DEE9", // Darkest snow storm color
    nord5: "#E5E9F0", // Medium snow storm color
    nord6: "#ECEFF4", // Brightest snow storm color
  },

  // Frost (accent colors)
  frost: {
    nord7: "#8FBCBB", // Teal/cyan color
    nord8: "#88C0D0", // Bright blue accent
    nord9: "#81A1C1", // Medium blue accent
    nord10: "#5E81AC", // Dark blue accent
  },

  // Aurora (functional colors)
  aurora: {
    nord11: "#BF616A", // Red - errors, destructive actions
    nord12: "#D08770", // Orange - warnings, special annotations
    nord13: "#EBCB8B", // Yellow - warnings, escape characters
    nord14: "#A3BE8C", // Green - success, strings
    nord15: "#B48EAD", // Purple - numbers, special elements
  },

  // All Nord colors in a flat object for easier access if needed
  all: {
    nord0: "#2E3440",
    nord1: "#3B4252",
    nord2: "#434C5E",
    nord3: "#4C566A",
    nord4: "#D8DEE9",
    nord5: "#E5E9F0",
    nord6: "#ECEFF4",
    nord7: "#8FBCBB",
    nord8: "#88C0D0",
    nord9: "#81A1C1",
    nord10: "#5E81AC",
    nord11: "#BF616A",
    nord12: "#D08770",
    nord13: "#EBCB8B",
    nord14: "#A3BE8C",
    nord15: "#B48EAD",
  },
};

// Semantic aliases for common use cases
export const NordSemanticColors = {
  light: {
    background: NordColors.snowStorm.nord6,
    foreground: NordColors.polarNight.nord0,
    primary: NordColors.frost.nord10,
    secondary: NordColors.snowStorm.nord5,
    accent: NordColors.frost.nord7,
    muted: NordColors.snowStorm.nord4,
    border: NordColors.snowStorm.nord4,
  },
  dark: {
    background: NordColors.polarNight.nord0,
    foreground: NordColors.snowStorm.nord6,
    primary: NordColors.frost.nord8,
    secondary: NordColors.polarNight.nord1,
    accent: NordColors.frost.nord9,
    muted: NordColors.polarNight.nord2,
    border: NordColors.polarNight.nord3,
  },
  // Functional colors that don't change between light/dark modes
  functional: {
    error: NordColors.aurora.nord11,
    warning: NordColors.aurora.nord13,
    success: NordColors.aurora.nord14,
    info: NordColors.frost.nord8,
  },
};

/**
 * Function to get a color from the Nord palette by its number
 * @param number Nord color number (0-15)
 * @returns Hexadecimal color string
 */
export function getNordColor(number: number): string {
  if (number < 0 || number > 15) {
    throw new Error(
      `Invalid Nord color number: ${number}. Must be between 0-15.`
    );
  }

  if (number <= 3) return Object.values(NordColors.polarNight)[number];
  if (number <= 6) return Object.values(NordColors.snowStorm)[number - 4];
  if (number <= 10) return Object.values(NordColors.frost)[number - 7];
  return Object.values(NordColors.aurora)[number - 11];
}

/**
 * Function to get a CSS variable for a Nord color
 * @param number Nord color number (0-15)
 * @returns CSS variable string (e.g., "var(--nord0)")
 */
export function getNordVar(number: number): string {
  if (number < 0 || number > 15) {
    throw new Error(
      `Invalid Nord color number: ${number}. Must be between 0-15.`
    );
  }
  return `var(--nord${number})`;
}
