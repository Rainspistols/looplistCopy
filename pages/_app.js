import Theme from '../theme/theme';
import GlobalStyles from '../styles/GlobalStyles';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';

import Router from 'next/router';
import withGA from 'next-ga';

function App({ Component, pageProps }) {
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

// export default App;

export default withGA('UA-78147056-2', Router)(App);
