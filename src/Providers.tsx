import { ModalProvider, light, dark, UIKitProvider } from '@pancakeswap/uikit'
import { Provider } from 'react-redux'
import { SWRConfig } from 'swr'
import { LanguageProvider } from '@pancakeswap/localization'
import { fetchStatusMiddleware } from 'hooks/useSWRContract'
import { Store } from '@reduxjs/toolkit'
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes'
import { WagmiProvider } from '@pancakeswap/wagmi'
import { client } from 'utils/wagmi'
import { HistoryManagerProvider } from 'contexts/HistoryContext'
import { ThemeProvider } from 'styled-components'

// Default theme - used during SSR and when resolvedTheme is undefined
const defaultTheme = dark;

const StyledUIKitProvider: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
  const { resolvedTheme } = useNextTheme()
  const theme = resolvedTheme === 'light' ? light : dark;
  
  return (
    <ThemeProvider theme={theme || defaultTheme}>
      <UIKitProvider theme={theme || defaultTheme} {...props}>
        {children}
      </UIKitProvider>
    </ThemeProvider>
  )
}

const Providers: React.FC<React.PropsWithChildren<{ store: Store; children: React.ReactNode }>> = ({
  children,
  store,
}) => {
  return (
    <WagmiProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <NextThemeProvider defaultTheme="dark">
            <StyledUIKitProvider>
              <LanguageProvider>
                <SWRConfig
                  value={{
                    use: [fetchStatusMiddleware],
                  }}
                >
                  <HistoryManagerProvider>
                    <ModalProvider>{children}</ModalProvider>
                  </HistoryManagerProvider>
                </SWRConfig>
              </LanguageProvider>
            </StyledUIKitProvider>
          </NextThemeProvider>
        </ThemeProvider>
      </Provider>
    </WagmiProvider>
  )
}

export default Providers
