import Hero from '../components/Hero/Hero';
import MainProducts from '../components/MainProducts/MainProducts';
import Products from '../components/Products/Products';
import CreatedBy from '../components/CreatedBy/CreatedBy';
import WhatIsLoopList from '../components/WhatIsLoopList/WhatIsLoopList';
import ColorfulSeparater from '../UI/ColorfulSeparater';
import Main from '../layouts/Main';
import InstagramEmbedCard from '../components/InstagramEmbedCard/InstagramEmbedCard';

const Home = () => {
  return (
    <Main headTitle="Loop's list">
      {/* <InstagramEmbedCard />
      <InstagramEmbedCard />
      <InstagramEmbedCard /> */}

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
