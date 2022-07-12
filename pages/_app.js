import '../styles/globals.css'
import Head from 'next/head'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel='shortcut icon' href='/assets/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
