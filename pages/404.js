import Head from 'next/head'
import Link from 'next/link'

export default function FourZeroFour() {
  return (
    <div className="container">
      <Head>
        <title>404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1> Oops, can't find what you're looking for.</h1>
    
        <Link href='/'>
          Go to home
        </Link>
      </main>
    </div>
  )
}
