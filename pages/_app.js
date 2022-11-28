import { SessionProvider } from "next-auth/react"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Redux
import { store } from '../redux/store'
import { Provider } from 'react-redux'

import './../styles/public.scss'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  const DynamicComponent = dynamic(() =>
    import('react-hot-toast').then((mod) => mod.Toaster)
  )

  return (
    <SessionProvider session={session}>
      <Suspense fallback={`Loading...`}>
        <DynamicComponent />
      </Suspense>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
