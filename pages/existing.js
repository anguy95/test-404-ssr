import Head from 'next/head'
import Link from 'next/link'

export default function Existing() {
  return (
    <div className="container">
      <Head>
        <title>Page Exists</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Existing</h1>

        <Link href='/'>
          Go to home
        </Link>
      </main>
    </div>
  )
}
