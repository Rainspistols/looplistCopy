
import Theme from '../theme/theme';
import GlobalStyles from '../styles/GlobalStyles';

// This default export is required in a new `pages/_app.js` file.
function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default App;
