import Main from '../layouts/Main/Main';
import Hero from '../components/Hero/Hero';
import WhatIsLoopList from '../components/WhatIsLoopList/WhatIsLoopList';

const Home = () => {
  return (
    <Main headTitle="About Loop's list">
      <Hero />
      <WhatIsLoopList />
    </Main>
  );
};

export default Home;
