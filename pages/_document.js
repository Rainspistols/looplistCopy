import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          <meta property="og:site_name" content="Loop's List" />
          <meta property="og:url" content="http://loopslist.com" />
          <meta property="og:image" content="http://loopslist.com/images/BUG_WAVE.png" />
          <meta name="og:title" content="Loop's List" />

          <meta name="description" content="Coding and Technology Concepts" />
          <meta name="author" content="Loop's List" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
