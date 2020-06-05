import Head from 'next/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

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
