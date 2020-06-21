import AbcsOfCoding from '../../components/AbcsOfCoding/AbcsOfCoding';
import ContentfulService from '../../services/contentful';
import Main from '../../layouts/Main';
import GumroadService from '../../services/gumroad';

const Alphabet = ({ allContentPageItems, gumroadAllProducts }) => {
  return (
    <Main headTitle="Abcs-of-code">
      <AbcsOfCoding data={allContentPageItems} gumroadAllProducts={gumroadAllProducts} />
    </Main>
  );
};

export const getStaticProps = async () => {
  const contentfulService = new ContentfulService();
  const allContentPageItems = await contentfulService.getAllContentPage();
  
  const gumroadService = new GumroadService();
  const gumroadAllProducts = await gumroadService.getGumroadAllProducts();

  return {
    props: {
      allContentPageItems,
      gumroadAllProducts,
    },
  };
};

export default Alphabet;
