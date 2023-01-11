import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'


function MyApp({ Component, pageProps }) {
  return (
      <div>
        <Component {...pageProps} />
        
      </div>
  )
}

export default MyApp
