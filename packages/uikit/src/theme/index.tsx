import React, { useState, useEffect } from "react";
import { dark as darkAlert } from "../components/Alert/theme";
import { dark as darkCard } from "../components/Card/theme";
import { dark as darkPancakeToggle } from "../components/PancakeToggle/theme";
import { dark as darkRadio } from "../components/Radio/theme";
import { dark as darkToggle } from "../components/Toggle/theme";
import { dark as darkNav } from "../widgets/Menu/theme";
import { dark as darkModal } from "../widgets/Modal/theme";
import { dark as darkTooltip } from "../components/Tooltip/theme";
import base from "./base";
import { darkColors, lightColors } from "./colors";
import { ModalProvider } from "../widgets/Modal";
import { light as lightAlert } from "../components/Alert/theme";
import { light as lightCard } from "../components/Card/theme";
import { light as lightPancakeToggle } from "../components/PancakeToggle/theme";
import { light as lightRadio } from "../components/Radio/theme";
import { light as lightToggle } from "../components/Toggle/theme";
import { light as lightNav } from "../widgets/Menu/theme";
import { light as lightModal } from "../widgets/Modal/theme";
import { light as lightTooltip } from "../components/Tooltip/theme";
import { PancakeTheme, ResetCSS, Fonts, Colors } from "./types";
import { createGlobalStyle, ThemeProvider as SCThemeProvider, DefaultTheme } from "styled-components";

// Define the fonts to be loaded from Google Fonts
const FONTS_URL = "https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Silkscreen:wght@400;700&display=swap";

const GlobalFonts = createGlobalStyle`
  /* No need for @font-face rules when using Google Fonts link */
`;

// Extend DefaultTheme to include our custom fonts and colors
interface AppTheme extends DefaultTheme {
  fonts: Fonts;
  colors: Colors;
}

// Create a GlobalStyle component for the entire app
const GlobalStyle = createGlobalStyle<{theme: AppTheme}>`
  * {
    font-family: ${({ theme }) => theme.fonts.primary};
    box-sizing: border-box;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px; // Slightly smaller base font size for retro feel
    line-height: 1.4;
    
    img {
      height: auto;
      max-width: 100%;
    }
    
    // Natural highlight color
    ::selection {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.contrast};
    }
  }

  h1, h2, h3, h4, h5 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.8em;
    line-height: 1.2;
  }
  
  h1 {
    font-size: 1.8em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.2em;
  }
  
  a {
    color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  
  // Code snippets style
  code {
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.primaryDark};
    background: ${({ theme }) => theme.colors.backgroundAlt};
    padding: 2px 4px;
    border-radius: 2px;
  }
  
  // Base button styling
  button {
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`;

// Function to load the Google Fonts
function FontLoader() {
  useEffect(() => {
    // Create a link element for the Google Fonts
    const link = document.createElement("link");
    link.href = FONTS_URL;
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    // Clean up
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  return null;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: PancakeTheme;
}

export const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: (() => {}) as () => void
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prevState) => !prevState);

  useEffect(() => {
    // Check if user has dark mode preference
    if (window?.localStorage?.getItem("IS_DARK") === "true") {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (window?.localStorage) {
      window.localStorage.setItem("IS_DARK", isDark ? "true" : "false");
    }
  }, [isDark]);

  const mergedTheme = theme || (isDark ? darkTheme : lightTheme);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={mergedTheme as AppTheme}>
        <FontLoader />
        <GlobalFonts />
        <ResetCSS />
        <GlobalStyle />
        <ModalProvider>{children}</ModalProvider>
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export const lightTheme: PancakeTheme = {
  ...base,
  isDark: false,
  alert: lightAlert,
  colors: lightColors,
  card: lightCard,
  toggle: lightToggle,
  nav: lightNav,
  modal: lightModal,
  pancakeToggle: lightPancakeToggle,
  radio: lightRadio,
  tooltip: lightTooltip,
};

export const darkTheme: PancakeTheme = {
  ...base,
  isDark: true,
  alert: darkAlert,
  colors: darkColors,
  card: darkCard,
  toggle: darkToggle,
  nav: darkNav,
  modal: darkModal,
  pancakeToggle: darkPancakeToggle,
  radio: darkRadio,
  tooltip: darkTooltip,
};

export { ThemeProvider }; 