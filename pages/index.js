import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Homepage</h1>
        
        <Link href='/pages/tyler'>
          Go to Tyler page
        </Link>
        <Link href='/pages/aaron'>
          Go to Aaron page
        </Link>
        <Link href='/pages/jason'>
          Go to Jason page
        </Link>

        <Link href='/asdf'>
          Go to dead page
        </Link>
    
      </main>
    </div>
  )
}
