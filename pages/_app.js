import Head from 'next/head'

import './../styles/public.scss'

// Images
import Logo from './../public/images/logo/logo.png'

function MyApp({ Component, pageProps }) {
  return <>
    < Head >
      <link rel="shortcut icon" href={Logo.src} />
    </Head >
    <Component {...pageProps} />
  </>
}

export default MyApp
