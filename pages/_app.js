import '../styles/global.scss';
import Theme from '../theme/theme';
import Header from '../components/Header/Header';
import GlobalStyles from '../styles/GlobalStyles';

// This default export is required in a new `pages/_app.js` file.
function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default App;
