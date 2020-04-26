import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.scss'

export const siteTitle = "Loop's List"

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta property="og:site_name" content="Loop's List" />
        <meta property="og:url" content="http://loopslist.com" />
        <meta property="og:image" content="http://loopslist.com/images/BUG_WAVE.png" />
        <meta name="og:title" content={siteTitle} />

        <meta name="description" content="Coding and Technology Concepts" />
        <meta name="author" content="Loop's List" />
      </Head>

      <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <h3>{siteTitle}</h3>
            </a>

            <a
              role          = "button"
              className     = "navbar-burger burger"
              aria-label    = "menu"
              aria-expanded = "false"
              data-target   = "navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <Link className="navbar-item" href="/abcs-of-code">
                  ABCs of Code
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

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
  )
}
