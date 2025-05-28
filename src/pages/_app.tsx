import { GlobalStyle } from '@/styles/globals'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Saúde Integrada</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
