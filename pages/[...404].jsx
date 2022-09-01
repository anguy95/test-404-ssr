import FourZeroFour from "../components/404";

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps(context) {
  if (!!context.preview) {
    return {
      redirect: {
        destination: "/not-found",
      },
      props: {
        preview: !!context.preview,
      },
    };
  }

  return { notFound: true };
}

export default FourZeroFour;
