import FourZeroFour from "../components/404";
import { get404 } from "../content-api";

export async function getStaticProps(context) {
  const page = await get404();

  return {
    props: {
      ...page,
      preview: !!context.preview, // will be passed to the page component as props
    },
  };
}

export default FourZeroFour;
