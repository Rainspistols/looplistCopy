import Main from '../layouts/Main/Main';
import Hero from '../components/Hero/Hero';
import MainProducts from '../components/MainProducts/MainProducts';
import Products from '../components/Products/Products';
import CreatedBy from '../components/CreatedBy/CreatedBy';
import ColorfulSeparater from '../layouts/ColorfulSeparater/ColorfulSeparater';
import Newsletter from '../components/Newsletter/Newsletter';

const Home = () => {
  return (
    <Main headTitle="loop's list">
      <ul>
        <li>{process.env.NEXT_SERVER_TEST_1}</li>
        <li>{process.env.NEXT_PUBLIC_TEST_1}</li>
        <li>{process.env.NEXT_STATIC_TEST_1}</li>
      </ul>
      <Hero />
      <MainProducts />
      <ColorfulSeparater color="#00c2f7" />
      <Products />
      <CreatedBy />
      <ColorfulSeparater color="#f5f5f5" />
      <Newsletter />
    </Main>
  );
};

export const getStaticProps = async (context) => {
  // const res = await fetch(`https://cdn.contentful.com/ySgbMa8_1DHQJ7iHbeXi6Eu2IdwzpUOW9v4G8yN-5iA`);
  // const ourWorksData = await res.json();

  return {
    props: {
      // ourWorksData,
    },
  };
};

// Space ID: f1b2ccqacux6
// Content Delivery API: ySgbMa8_1DHQJ7iHbeXi6Eu2IdwzpUOW9v4G8yN-5iA

export default Home;
