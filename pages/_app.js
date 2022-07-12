import Head from 'next/head'
import { SessionProvider } from "next-auth/react"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'


import './../styles/public.scss'

// Images
import Logo from './../public/images/logo/logo.png'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  
  const DynamicComponent = dynamic(() =>
    import('react-hot-toast').then((mod) => mod.Toaster)
  )

  return (
    <SessionProvider session={session}>
      < Head >
        <link rel="shortcut icon" href={Logo.src} />
      </Head >

      <Suspense fallback={`Loading...`}>
        <DynamicComponent />
      </Suspense>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
