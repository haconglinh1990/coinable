import {createGlobalStyle} from 'styled-components'
import type {AppProps} from 'next/app'
import MainLayout from "../layouts/MainLayout";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <GlobalStyle />
          <MainLayout>
              <Component {...pageProps} />
          </MainLayout>
      </>
  )
}

export default MyApp
