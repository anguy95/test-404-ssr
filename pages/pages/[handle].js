import Head from "next/head";
import Link from "next/link";

import {getPages, getPage} from '../../content-api';

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const pages = await getPages();

  const paths = pages.map((page) => ({
    params: { handle: page.handle },
  }));

  // We want to always fallback to blocking because
  // we can't 404 immediately with fallback false
  // as we need to always run through the GSProps
  // due to us needing to manually determining how
  // to route to a 404 page if in preview or not
  // because of a Netlify issue and how it serves
  // the 404
  return { paths, fallback: "blocking" };
}

export async function getStaticProps(context) {
  const page = await getPage(context.params.handle);

  // If we have no coresponding page from this handle
  // we should 404
  if (!page) {
    // Because Netlify will always serve the 404
    // from the CDN even in preview mode, we have
    // to have a hack route when in preview mode
    // to render a buildable 404 route in the
    // customizer
    if (!!context.preview) {
      return {
        redirect: {
          destination: "/not-found",
        },
      };
    }

    // If we aren't in preview mode, we should just
    // redirect them to the 404 page
    return { notFound: true };
  }

  return {
    props: { ...page, preview: !!context.preview }, // will be passed to the page component as props
  };
}

export default function Page(props) {
  return (
    <div className="container">
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {props.preview && <h3>In Preview</h3>}

        <pre>Page Template</pre>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>

        <Link href="/">Go to home</Link>
      </main>
    </div>
  );
}
