import Theme from '../theme/theme';
import GlobalStyles from '../styles/GlobalStyles';
import emailjs from 'emailjs-com';

// This default export is required in a new `pages/_app.js` file.
function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <Component {...pageProps} />
        {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
        <script type="text/javascript">
          (function()
          {emailjs.init('user_WeycbcJ0dxUPiHdonwe4f')}
          )();
        </script> */}
      </Theme>
    </>
  );
}

export default App;
