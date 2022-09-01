import Head from 'next/head'
import Link from 'next/link'

export async function getStaticPaths() {
  // { fallback: false } means other routes should 404
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps(context) {
  return {
    redirect: {
      destination: '/not-found'
    },
    props: {
      preview: !!context.preview
    }
  }
}

export default function CatchAll(props) {
  console.log('=== asdf', props)
  return (
    <div className="container">
      <Head>
        <title>catch all</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {
          props.preview && 
          <h3>In Preview Catch all</h3>
        }
        <h1> Catch all </h1>
    
        <Link href='/'>
          Go to home
        </Link>
      </main>
    </div>
  )
}

