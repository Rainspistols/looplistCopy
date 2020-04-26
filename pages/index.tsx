import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="Home">
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <p className="subtitle">Loop’s List introduces coding and technology concepts!</p>
            </div>
          </div>
        </section>

        <section className="section has-background-white">
          <div className="container">
            <div className="columns">
              <div className="column">
                <figure className="image is-3by3">
                  <img src="https://loopslist.s3.amazonaws.com/web/images/08_LOOP_INSTA_WHILE_NAPTIME_CAT.jpg" alt="" />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-3by3">
                  <img src="https://loopslist.s3.amazonaws.com/web/images/47_LOOP_INSTA_FLOAT_01.jpg" alt="" />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-3by3">
                  <img src="https://loopslist.s3.amazonaws.com/web/images/35_LOOP_INSTA_PIRATE_ARG_01.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="hero blue-section">
          <div className="hero-body">
            <p className="title"></p>
          </div>
        </section>

        <section className="section has-background-white-ter card-list">
          <div className="container">
            <h2 className="subtitle">
              Follow along on <a href="https://www.instagram.com/loopslist/">Instagram</a> for coding basics and
              stories.
            </h2>
            <div className="columns">
              <div className="column">
                <figure className="image is-3by3">
                  <img src="https://loopslist.s3.amazonaws.com/web/images/65_LOOP_INSTA_DEF.jpg" alt="" />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-3by3">
                  <img src="https://loopslist.s3.amazonaws.com/web/images/55_LOOP_INSTA_BYTE.jpg" alt="" />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-3by3">
                  <img src="https://loopslist.s3.amazonaws.com/web/images/28_LOOP_INSTA_ALGO_BEDTIME.jpg" alt="" />
                </figure>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <figure className="image is-3by3">
                  <img src="https://loopslist.s3.amazonaws.com/web/images/44_LOOP_INSTA_ARRAYS_HUGS_01.jpg" alt="" />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-3by3">
                  <img src="https://loopslist.s3.amazonaws.com/web/images/52_LOOP_INSTA_BIT_01.jpg" alt="" />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-3by3">
                  <img src="https://loopslist.s3.amazonaws.com/web/images/15_LOOP_INSTA_STRING.jpg" alt="" />
                </figure>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <figure className="image is-3by3">
                  <img src="https://loopslist.s3.amazonaws.com/web/images/10_LOOP_INSTA_BUGS_01.jpg" alt="" />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-3by3">
                  <img src="https://loopslist.s3.amazonaws.com/web/images/25_LOOP_INSTA_VARIABLE_CAT_01.jpg" alt="" />
                </figure>
              </div>
              <div className="column">
                <figure className="image is-3by3">
                  <img src="https://loopslist.s3.amazonaws.com/web/images/42_LOOP_INSTA_ARRAYS.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="section who-we-are">
          <div className="container">
            <h1 className="title">Created By</h1>
            <div className="columns">
              <div className="column">
                <a href="http://astridriemer.com/">
                  <img width="125" src="/images/CAT_CIRCLE.png" alt="" />
                </a>
                <a href="http://astridriemer.com/">
                  <h2 className="subtitle">Astrid Riemer</h2>
                </a>
                <h3>designer</h3>
              </div>
              <div className="column">
                <a href="http://roomnoise.com/">
                  <img width="125" src="/images/BUG_CIRCLE.png" alt="" />
                </a>
                <a href="http://roomnoise.com/">
                  <h2 className="subtitle">Marcus Smith</h2>
                </a>
                <h3>software developer</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="section has-background-white-ter">
          <div className="container"></div>
        </section>

        <section className="section email-signup">
          <div className="container intro-text">
            <form
              action="https://gmail.us3.list-manage.com/subscribe/post?u=95920c1da2b492843fa60271e&amp;id=6a0e3b1b73"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              novalidate
            >
              <h2 className="subtitle">Get Loop's List Updates!</h2>
              <div className="field has-addons">
                <p className="control is-expanded has-icons-left">
                  <input
                    type="email"
                    name="EMAIL"
                    className="input email"
                    id="mce-EMAIL"
                    placeholder="Email address"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </p>
                <p className="control">
                  <button className="button is-info" type="submit">
                    Sign me up!
                  </button>
                </p>
              </div>
              <div className="mce-pos" aria-hidden="true">
                <input type="text" name="b_95920c1da2b492843fa60271e_6a0e3b1b73" tabindex="-1" value="" />
              </div>
              <div id="mce-responses" className="clear">
                <div className="mce-response response" id="mce-error-response"></div>
                <div className="mce-response response" id="mce-success-response"></div>
              </div>
            </form>
          </div>
          <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
        </section>
      </div>
    </Layout>
  )
}
