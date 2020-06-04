import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.scss';

export const siteTitle = "Loop's List";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta property="og:site_name" content="Loop's List" />
        <meta property="og:url" content="http://loopslist.com" />
        <meta property="og:image" content="http://loopslist.com/images/BUG_WAVE.png" />
        <meta name="og:title" content={siteTitle} />

        <meta name="description" content="Coding and Technology Concepts" />
        <meta name="author" content="Loop's List" />

        <script src="https://kit.fontawesome.com/90203d613f.js"></script>
      </Head>

      <main>{children}</main>

      <footer className="footer has-background-white">
        <div className="content has-text-centered">
          <a href="https://www.instagram.com/loopslist/">
            <i className="fab fab-footer fa-instagram fa-3x"></i>
          </a>
          <a href="https://twitter.com/loopslist">
            <i className="fab fab-footer fa-twitter fa-3x"></i>
          </a>
          <br />
          <br />
          <a href="mailto:hello@loopslist.com">Contact Us</a>
          <br />
          <br />
          <p>™ © 2020 {siteTitle}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
