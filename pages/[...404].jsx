import FourZeroFour from "../components/404";

// If you ever hit this catch all page, this 
// means that whatever route you have entered 
// does not exist because we leverage Next.js
// route specificity to handle routes that do 
// exists
export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps(context) {
  if (!!context.preview) {
    return {
      redirect: {
        destination: "/not-found",
      },
    };
  }

  return { notFound: true };
}

export default FourZeroFour;
