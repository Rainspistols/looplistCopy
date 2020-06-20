import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Main = ({ headTitle, children }) => {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
