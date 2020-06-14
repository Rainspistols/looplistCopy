import Main from '../layouts/Main/Main';
import Hero from '../components/Hero/Hero';
import MainProducts from '../components/MainProducts/MainProducts';
import Products from '../components/Products/Products';
import CreatedBy from '../components/CreatedBy/CreatedBy';
import ColorfulSeparater from '../layouts/ColorfulSeparater/ColorfulSeparater';
import WhatIsLoopList from '../components/WhatIsLoopList/WhatIsLoopList';

const Home = () => {
  return (
    <Main headTitle="loop's list">
      <Hero />
      <MainProducts />
      <ColorfulSeparater color="#00c2f7" />
      <WhatIsLoopList />
      <Products />
      <CreatedBy />
      <ColorfulSeparater color="#f5f5f5" />
    </Main>
  );
};

export default Home;
