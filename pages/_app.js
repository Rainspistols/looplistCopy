import Theme from '../theme/theme';
import GlobalStyles from '../styles/GlobalStyles';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';

// import ReactGA from 'react-ga';
// import { useEffect } from 'react';

// This default export is required in a new `pages/_app.js` file.

// REACT GA - delete if you don't need it
function App({ Component, pageProps }) {
  // useEffect(() => {
  //   ReactGA.initialize('UA-169216395-1', {
  //     'cookieDomain': 'auto',
  //     'debug': true
  //   });

  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  return (
    <>
      <Theme>
        <CacheProvider value={cache}>
          <GlobalStyles />
          <Component {...pageProps} />
        </CacheProvider>
      </Theme>
    </>
  );
}

export default App;
