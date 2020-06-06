import styled from '@emotion/styled';
import Container from '../../layouts/Container/Container';

const Newsletter = () => {
  return (
    <NewsletterStyled>
      <Container>
        <form
          action="https://gmail.us3.list-manage.com/subscribe/post?u=95920c1da2b492843fa60271e&amp;id=6a0e3b1b73"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <h2 className="subtitle">Get Loop`s List Updates!</h2>

          <div className="field has-addons input-button--wrap">
            <p className="control is-expanded has-icons-left inputWrap">
              <input
                type="email"
                name="EMAIL"
                className="input email"
                id="mce-EMAIL"
                placeholder="Email address"
                required
              />
            </p>

            <p className="control buttonWrap">
              <button className="button is-info" type="submit">
                Sign me up!
              </button>
            </p>
          </div>

          <div className="mce-pos visually-hidden" ariahidden="true">
            <input type="text" name="b_95920c1da2b492843fa60271e_6a0e3b1b73" />
          </div>
          <div id="mce-responses" className="clear">
            <div className="mce-response response" id="mce-error-response"></div>
            <div className="mce-response response" id="mce-success-response"></div>
          </div>
        </form>
        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
      </Container>
    </NewsletterStyled>
  );
};

const NewsletterStyled = styled.section`
  background: ${(props) => props.theme.colors.pink2};
  padding: 50px 0;

  .subtitle {
    font-weight: 400;
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 30px;
  }

  .input-button--wrap {
    ${(props) => props.theme.flexCenter};
    width: 100%;
    box-sizing: border-box;

    .buttonWrap {
      height: 100%;
      width: 40%;

      button {
        background: ${(props) => props.theme.colors.blue2};
        font-size: 14px;
        line-height: 16px;
        padding: 10px 20px;
        white-space: nowrap;
        color: ${(props) => props.theme.colors.white};
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        border-radius: 0 5px 5px 0;
      }
    }

    .inputWrap,
    .buttonWrap {
      height: 40px;
      box-sizing: border-box;
    }

    .inputWrap {
      width: 60%;

      input {
        box-sizing: border-box;
        height: 100%;
        border: none;
        width: 100%;
        border-radius: 5px 0 0 5px;
        padding: 5px 20px;

        ::placeholder {
          color: ${(props) => props.theme.colors.white};
        }
      }
    }
  }

  #mce-success-response {
    padding-top: 20px;
    color: ${(props) => props.theme.colors.brown};
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
  }
`;

export default Newsletter;
