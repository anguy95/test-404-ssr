import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps(context) {
  console.log('==== called gsProps', context );

  return {
    props: {  
      handle: '404',
      title: 'Oops, not found', 
      preview: !!context.preview, // will be passed to the page component as props
      ah: Math.random()
    }
  }
}

export default function FourZeroFour(props) {
  console.log('==== page props', props); 

  return (
    <div className="container">
      <Head>
        <title>404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {
          props.preview && 
          <h3>In Preview</h3>
        }
        <h1> Oops, cant find what youre looking for.</h1>
    
        <Link href='/'>
          Go to home
        </Link>
      </main>
    </div>
  )
}
