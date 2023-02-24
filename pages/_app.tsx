import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { createTheme, NextUIProvider } from "@nextui-org/react"


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: '#F2F2F2',
      secondary: '#313131',
      error: '#FCC5D8',
    },
  }
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Optional funcition if a page needs a layout
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return getLayout(
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  ) 
  
}
