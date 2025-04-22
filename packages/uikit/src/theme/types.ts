import { AlertTheme } from "../components/Alert/types";
import { CardTheme } from "../components/Card/types";
import { PancakeToggleTheme } from "../components/PancakeToggle/types";
import { RadioTheme } from "../components/Radio/types";
import { TooltipTheme } from "../components/Tooltip/types";
import { ModalTheme } from "../widgets/Modal/types";
import { createGlobalStyle } from "styled-components";

export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
  tooltip: string;
};

export type Gradients = {
  bubblegum: string;
  inverseBubblegum: string;
  cardHeader: string;
  blue: string;
  violet: string;
  violetAlt: string;
  gold: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  cardBorder: string;
  contrast: string;
  dropdown: string;
  dropdownDeep: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  backgroundAlt: string;
  backgroundAlt2: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  disabled: string;

  // Gradients
  gradientBubblegum: string;
  gradientInverseBubblegum: string;
  gradientCardHeader: string;
  gradientBlue: string;
  gradientViolet: string;
  gradientVioletAlt: string;
  gradientGold: string;
  gradientNeon: string;

  // Additional colors
  binance: string;
  overlay: string;
  gold: string;
  silver: string;
  bronze: string;
  neonPink: string;
  neonPurple: string;
  acid: string;
  deepPurple: string;
  
  // Expanded colors
  white: string;
  failure33: string;
  primary0f: string;
  primary3D: string;
  success19: string;
  warning2D: string;
  warning33: string;
  text99: string;
  secondary80: string;
};

export type ZIndices = {
  ribbon: number;
  dropdown: number;
  modal: number;
};

export type Fonts = {
  primary: string;
  heading: string;
  mono: string;
};

// Define the missing types to prevent import errors
export type ToggleTheme = {
  handleBackground: string;
};

export type NavTheme = {
  background: string;
};

export interface PancakeTheme {
  siteWidth: number;
  isDark: boolean;
  alert: AlertTheme;
  colors: Colors;
  card: CardTheme;
  nav: NavTheme;
  modal: ModalTheme;
  pancakeToggle: PancakeToggleTheme;
  radio: RadioTheme;
  toggle: ToggleTheme;
  tooltip: TooltipTheme;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
  fonts: Fonts;
}

export const ResetCSS = createGlobalStyle`
  /* prettier-ignore */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  /* prettier-ignore */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-size: 16px;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }
`;
