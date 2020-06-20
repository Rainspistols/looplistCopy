import Hero from '../components/Hero/Hero';
import WhatIsLoopList from '../components/WhatIsLoopList/WhatIsLoopList';
import Main from '../layouts/Main';

const Home = () => {
  return (
    <Main headTitle="About Loop's list">
      <Hero />
      <WhatIsLoopList />
    </Main>
  );
};

export default Home;
