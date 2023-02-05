import { SessionProvider } from "next-auth/react"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify';
// Redux
import { store } from '../redux/store'
import { Provider } from 'react-redux'

import './../styles/public.scss'
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
