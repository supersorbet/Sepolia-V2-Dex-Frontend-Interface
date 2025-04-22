import { vars } from "@pancakeswap/ui/css/vars.css";
import { darkColors as uiDarkColors, lightColors as uiLightColors } from "@pancakeswap/ui/tokens/colors";

// Base colors inspired by nature and ribo.zone
const baseColors = {
  white: '#F0F0DC', // Off-white
  failure: '#C85C5C', // Muted red
  failure33: '#C85C5C33',
  primary: '#90EE90', // Light green
  primary0f: '#90EE900f',
  primary3D: '#90EE903D',
  primaryBright: '#B4EEB4', // Brighter green
  primaryDark: '#556B2F', // Dark Olive Green
  success: '#8FBC8F', // Dark Sea Green
  success19: '#8FBC8F19',
  warning: '#DAA520', // Goldenrod
  warning2D: '#DAA5202D',
  warning33: '#DAA52033',
};

const additionalColors = {
  binance: '#F0B90B', // Keep for compatibility if needed
  overlay: 'rgba(0, 0, 0, 0.5)', // Darker overlay
  gold: '#DAA520',
  silver: '#A9A9A9', // Dark Gray
  bronze: '#8B4513', // Saddle Brown
};

// Gradients - subdued versions
const natureGradients = {
  forest: "linear-gradient(139.73deg, #2F4F4F 0%, #000000 100%)", // Dark Slate Gray to Black
  meadow: "linear-gradient(139.73deg, #556B2F 0%, #2F4F4F 100%)", // Dark Olive to Dark Slate
  earth: "linear-gradient(111.68deg, #8B4513 0%, #556B2F 100%)", // Brown to Olive
  sky: "linear-gradient(180deg, #B0C4DE 0%, #778899 100%)", // Light Steel Blue to Light Slate Gray
};

export const lightColors = {
  ...uiLightColors,
  ...baseColors,
  ...additionalColors,
  ...natureGradients,
  secondary: '#6B8E23', // Olive Drab
  secondary80: '#6B8E2380',
  background: '#F0F0DC', // Off-white background
  backgroundDisabled: '#D3D3D3', // Light Gray
  backgroundAlt: '#E0E0C8', // Slightly darker off-white
  backgroundAlt2: 'rgba(224, 224, 200, 0.7)',
  cardBorder: '#8FBC8F', // Dark Sea Green
  contrast: '#2F4F4F', // Dark Slate Gray text
  dropdown: '#E0E0C8',
  dropdownDeep: '#D3D3D3',
  invertedContrast: '#F0F0DC',
  input: '#E0E0C8', 
  inputSecondary: '#D3D3D3',
  tertiary: '#A9A9A9', // Dark Gray
  text: '#2F4F4F', // Dark Slate Gray
  text99: '#2F4F4F99',
  textDisabled: '#A9A9A9',
  textSubtle: '#556B2F', // Dark Olive Green
  disabled: '#DCDCDC', // Gainsboro
  gradientBubblegum: natureGradients.meadow, // Placeholder, update if needed
  gradientInverseBubblegum: natureGradients.forest,
  gradientCardHeader: natureGradients.earth,
  gradientBlue: natureGradients.sky,
  gradientViolet: "linear-gradient(180deg, #8FBC8F 0%, #556B2F 100%)", // Muted green gradient
  gradientVioletAlt: "linear-gradient(180deg, #556B2F 0%, #2F4F4F 100%)",
  gradientGold: "linear-gradient(180deg, #DAA520 0%, #B8860B 100%)", // Goldenrod gradient
  gradientNeon: "linear-gradient(90deg, #90EE90 0%, #8FBC8F 100%)", // Light Green to Sea Green
};

export const darkColors = {
  ...uiDarkColors,
  ...baseColors,
  ...additionalColors,
  ...natureGradients,
  secondary: '#B4EEB4', // Brighter Green for dark mode contrast
  secondary80: '#B4EEB480',
  background: '#1A241A', // Very dark green-desaturated
  backgroundDisabled: '#2F3B2F', // Darker disabled state
  backgroundAlt: '#253025', // Slightly lighter dark background for cards
  backgroundAlt2: 'rgba(37, 48, 37, 0.7)',
  cardBorder: '#556B2F', // Dark Olive Green border
  contrast: '#F0F0DC', // Off-white text
  dropdown: '#2F4F4F', // Dark Slate Gray dropdown
  dropdownDeep: '#1A241A',
  invertedContrast: '#1A241A',
  input: '#2F3B2F', // Dark input background
  inputSecondary: '#3A4C3A', // Slightly lighter input secondary state
  primaryDark: '#8FBC8F', // Dark Sea Green as primary dark
  tertiary: '#556B2F', 
  text: '#DDEEDD', // Very light green/off-white text
  text99: '#DDEEDD99',
  textDisabled: '#667466', // Muted text disabled
  textSubtle: '#8FBC8F', // Dark Sea Green subtle text
  disabled: '#405140',
  gradientBubblegum: natureGradients.forest,
  gradientInverseBubblegum: natureGradients.meadow,
  gradientCardHeader: natureGradients.earth,
  gradientBlue: natureGradients.sky,
  gradientViolet: "linear-gradient(180deg, #8FBC8F 0%, #556B2F 100%)",
  gradientVioletAlt: "linear-gradient(180deg, #556B2F 0%, #2F4F4F 100%)",
  gradientGold: "linear-gradient(180deg, #DAA520 0%, #B8860B 100%)",
  gradientNeon: "linear-gradient(90deg, #90EE90 0%, #B4EEB4 100%)", // Light Green to Brighter Green
};
