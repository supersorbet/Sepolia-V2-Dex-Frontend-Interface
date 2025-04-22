import { MediaQueries, Breakpoints, Spacing, Shadows, Radii, ZIndices, Fonts } from "./types";

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xxl: 1200,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  xxl: `@media screen and (min-width: ${breakpointMap.xxl}px)`,
};

// Simplified shadows for a flatter web 1.0 look
export const shadows: Shadows = {
  level1: "0px 1px 2px rgba(0, 0, 0, 0.1)",
  active: "0px 0px 0px 1px #8FBC8F, 0 0 4px 1px rgba(143, 188, 143, 0.5)", // Dark Sea Green focus
  success: "0px 0px 0px 1px #8FBC8F, 0 0 4px 1px rgba(143, 188, 143, 0.5)",
  warning: "0px 0px 0px 1px #DAA520, 0 0 4px 1px rgba(218, 165, 32, 0.5)", // Goldenrod focus
  focus: "0px 0px 0px 1px #8FBC8F, 0 0 4px 1px rgba(143, 188, 143, 0.5)",
  inset: "inset 0px 1px 1px rgba(0, 0, 0, 0.1)",
  tooltip: "0px 0px 4px rgba(0, 0, 0, 0.1)",
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

// Keep radii simple
const radii: Radii = {
  small: "2px",
  default: "4px",
  card: "8px",
  circle: "50%",
};

const zIndices: ZIndices = {
  ribbon: 9,
  dropdown: 10,
  modal: 100,
};

// Fonts inspired by DOS/bitmap style
export const fonts: Fonts = {
  primary: "'Pixelify Sans', sans-serif",
  heading: "'Silkscreen', sans-serif",
  mono: "'Pixelify Sans', monospace", // Use Pixelify for mono as well for consistency
};

export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
  fonts,
};
