import Head from 'next/head'
import Link from 'next/link'


const pages = {
  tyler: {
    handle: 'tyler',
    title: 'Tyler',
    description: 'I like apples!'
  },
  jason: {
    handle: 'jason',
    title: 'Jason',
    description: 'I like oranges!'
  },
  aaron: {
    handle: 'aaron',
    title: 'Aaron',
    description: 'I like grapes!'
  },
}

async function getPages() {
  await new Promise(r => setTimeout(r, 2000));

  return Object.values(pages);
}

export async function getStaticPaths() {
  // // When this is true (in preview environments) don't
  // // prerender any static pages
  // // (faster builds, but slower initial page load)
  // if (process.env.SKIP_BUILD_STATIC_GENERATION) {
  //   return {
  //     paths: [],
  //     fallback: 'blocking',
  //   }
  // }

  console.log('==== called gsPaths');
  // Call an external API endpoint to get posts
  const pages = await getPages()

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = pages.map((page) => ({
    params: { handle: page.handle },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  console.log('==== called gsProps', context, context.params.handle);
  const page = pages[context.params.handle];

  if (!page) {
    return { notFound: true, revalidate: 1 }
  }

  return {
    props: {...page, preview: !!context.preview}, // will be passed to the page component as props
  }
}

export default function Page(props) {
  console.log('==== page props', props); 

  return (
    <div className="container">
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {
          props.preview && 
          <h3>In Preview</h3>
        }

        <h1>{props.description}</h1>

        <Link href='/'>
          Go to home
        </Link>
      </main>
    </div>
  )
}
