import Head from 'next/head'
import { SessionProvider } from "next-auth/react"

import './../styles/public.scss'

// Images
import Logo from './../public/images/logo/logo.png'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
      < Head >
        <link rel="shortcut icon" href={Logo.src} />
      </Head >
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
