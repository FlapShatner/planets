import '../styles/globals.css'
import Head from 'next/head'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel='shortcut icon' href='/assets/favicon-32x32.png' />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
