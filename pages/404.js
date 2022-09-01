import FourZeroFour from '../components/404';

export async function getStaticProps(context) {
  return {
    props: {  
      handle: '404',
      title: 'Oops, not found', 
      preview: !!context.preview, // will be passed to the page component as props
    }
  }
}

export default FourZeroFour;
