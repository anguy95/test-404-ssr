import Head from "next/head";
import Link from "next/link";

export default function FourZeroFour(props) {
  return (
    <div className="container">
      <Head>
        <title>404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {props.preview && <h3>In Preview</h3>}
        <pre>404 Template</pre>
        <h1> Oops, cant find what youre looking for.</h1>

        <Link href="/">Go to home</Link>
      </main>
    </div>
  );
}
