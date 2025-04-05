import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Source Code Pro', monospace;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: ${({ theme }) => 
      theme.isDark 
        ? 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(10, 10, 15, 1) 100%)'
        : theme.colors.gradientBubblegum};
    background-attachment: fixed;
    background-size: 100% 100%;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle