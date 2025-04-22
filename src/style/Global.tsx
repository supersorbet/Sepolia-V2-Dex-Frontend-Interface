import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

// Add fallback colors for when theme is not available during server-side rendering
const getFallbackColor = (theme: any, path: string, fallback: string) => {
  try {
    // Use optional chaining to safely access nested properties
    const pathParts = path.split('.');
    let value = theme;
    
    for (const part of pathParts) {
      value = value?.[part];
      if (value === undefined) return fallback;
    }
    
    return value || fallback;
  } catch (e) {
    return fallback;
  }
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "DOS"; 
    src: url('/fonts/Px437_DOS-V_re_ANK24.woff2') format('woff2');
  }

  * {
    font-family: "DOS", "Courier New", Courier, monospace;
    font-smooth: never;
    -webkit-font-smoothing: none;
    image-rendering: pixelated;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scrollbar-color: cadetblue gainsboro;
    overscroll-behavior: none;
  }
  
  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => getFallbackColor(theme, 'colors.backgroundAlt', '#f1f1f1')};
    border: 1px solid ${({ theme }) => `${getFallbackColor(theme, 'colors.primary', 'cadetblue')}33`};
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, 
      ${({ theme }) => getFallbackColor(theme, 'colors.primary', 'cadetblue')}, 
      ${({ theme }) => getFallbackColor(theme, 'colors.secondary', 'teal')});
    border-radius: 4px;
  }
  
  body {
    background-color: ${({ theme }) => getFallbackColor(theme, 'colors.background', '#f0f0f0')};
    background-image: ${({ theme }) => 
      theme?.isDark 
        ? 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'smallGrid\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 20 0 L 0 0 0 20\' fill=\'none\' stroke=\'%2300EEFF11\' stroke-width=\'0.5\'/%3E%3C/pattern%3E%3Cpattern id=\'grid\' width=\'100\' height=\'100\' patternUnits=\'userSpaceOnUse\'%3E%3Crect width=\'100\' height=\'100\' fill=\'url(%23smallGrid)\'/%3E%3Cpath d=\'M 100 0 L 0 0 0 100\' fill=\'none\' stroke=\'%2300EEFF22\' stroke-width=\'1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\' /%3E%3C/svg%3E"), radial-gradient(circle at center, #000000 0%, #0a0a14 100%)'
        : getFallbackColor(theme, 'colors.gradientBubblegum', 'linear-gradient(180deg, #ffffff 0%, #eeeeff 100%)')};
    background-attachment: fixed;
    background-size: 100% 100%;
    position: relative;
    font-size: 1.125em;
    line-height: 1.3;
    color-scheme: light dark;
    
    &::after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.15) 1px,
        transparent 1px,
        transparent 2px
      );
      pointer-events: none;
      z-index: 9999;
      opacity: 0.3;
    }

    img {
      height: auto;
      max-width: 100%;
    }
  }
  
  /* DOS style headers */
  h1, h2, h3 {
    font-family: "DOS", "Courier New", Courier, monospace;
    color: ${({ theme }) => getFallbackColor(theme, 'colors.primary', 'teal')};
    font-weight: normal;
    margin: 18px 0;
  }
  
  h3 { 
    font-size: 1.25rem; 
    line-height: 1; 
    font-style: italic; 
  }
  
  h2 { 
    font-size: 1.45rem; 
    line-height: 1; 
    text-transform: uppercase; 
  }
  
  h1 { 
    font-size: 2.75rem; 
    line-height: 1; 
  }
  
  /* Button styling */
  button {
    font-family: "DOS", "Courier New", Courier, monospace;
    font-smooth: never;
    -webkit-font-smoothing: none;
    transition: all 0.15s ease;
    position: relative;
    
    &::before {
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border-radius: inherit;
      border: 1px solid transparent;
      background: linear-gradient(90deg, 
        ${({ theme }) => getFallbackColor(theme, 'colors.primary', 'cadetblue')}, 
        ${({ theme }) => getFallbackColor(theme, 'colors.secondary', 'teal')});
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    
    &:hover:not(:disabled) {
      transform: translateY(-1px);
      background-color: teal;
      color: white;
      
      &::before {
        opacity: 1;
      }
    }
    
    &:active:not(:disabled) {
      transform: translateY(1px);
    }
  }
  
  /* Dialog styling */
  div[role="dialog"] {
    border: 3px outset white;
    background-color: ${({ theme }) => theme?.isDark ? 'rgb(0,20,20,65%)' : 'rgb(255, 255, 255, 87%)'};
    position: relative;
  }
  
  /* Input styling */
  input {
    background-color: ${({ theme }) => `${getFallbackColor(theme, 'colors.input', '#f0f0f0')}E6`};
    border: 1px solid ${({ theme }) => `${getFallbackColor(theme, 'colors.primary', 'cadetblue')}33`};
    font-family: "DOS", "Courier New", Courier, monospace;
    font-smooth: never;
    -webkit-font-smoothing: none;
    font-size: 16px;
    color: ${({ theme }) => getFallbackColor(theme, 'colors.text', '#333333')};
    padding: 2px;
    
    &::placeholder {
      color: ${({ theme }) => `${getFallbackColor(theme, 'colors.textSubtle', '#999999')}80`};
      font-family: "DOS", "Courier New", Courier, monospace;
    }
    
    &:focus {
      border-color: ${({ theme }) => `${getFallbackColor(theme, 'colors.primary', 'cadetblue')}CC`};
      outline: none;
    }
  }
  
  /* Tables */
  table {
    border: 1px solid ${({ theme }) => theme?.isDark ? 'white' : 'black' };
  }
  
  tr, td, th { 
    border: 1px dotted ${({ theme }) => theme?.isDark ? 'white' : 'black' };
  }
  
  td, th { 
    padding: 5px; 
  }
  
  /* Links */
  a {
    color: teal;
    padding: 1px;
    
    &:hover, &:focus {
      background-color: teal;
      color: white;
    }
  }
  
  /* Add a subtle glow to card elements */
  div[data-name="Card"] {
    border: 3px outset white;
    background-color: ${({ theme }) => theme?.isDark ? 'rgb(0,20,20,65%)' : 'rgb(255, 255, 255, 87%)'};
    padding: 18px 36px;
  }
  
  /* Lists */
  ul {
    padding: 0px 10px 0px 20px;
    margin: 18px 0 18px 18px;
    text-align: left;
    list-style-type: square;
  }
  
  ol { 
    margin: 18px 0 18px 54px; 
  }
  
  ol ol { 
    margin: 0 0 0 54px; 
  }
  
  ul ul, dd { 
    margin: 0 0 0 18px;
  }
  
  /* Code elements */
  code {
    background-color: lightgrey;
    font-family: "DOS", "Courier New", Courier, monospace;
    padding: 1px 4px;
    color: ${({ theme }) => theme?.isDark ? 'black' : 'inherit'};
  }
  
  pre {
    background-color: lightgrey;
    overflow-x: auto;
    padding: 1px 4px;
  }
  
  /* Horizontal rule */
  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme?.isDark ? 'white' : 'black'};
    margin: 18px 0;
  }
  
  /* Responsive adjustments */
  @media screen and (max-width: 600px){
    h1, h2, h3, h4, h5, h6, p, table, details, cite, blockquote, hr {
      margin: 16px 0;
    }

    ul, dl {
      margin: 16px 0 16px 16px;
    }

    ol { margin: 16px 0 16px 48px; }
    ol ol { margin: 0 0 0 48px; }

    ul ul, dd { 
      margin: 0 0 0 16px;
    }

    p, ol, ul, dl, code, details, table { font-size: 0.9rem; }
  }
`

export default GlobalStyle