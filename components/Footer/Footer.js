import styled from '@emotion/styled';
import { GrTwitter } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';

import Container from '../../layouts/Container/Container';

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <div className="socials">
          <a
            className="social-item"
            href="https://www.instagram.com/loopslist/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>

          <a className="social-item" href="https://twitter.com/loopslist" target="_blank" rel="noopener noreferrer">
            <GrTwitter />
          </a>
        </div>

        <a className="email" href="mailto:hello@loopslist.com">
          Send us a email
        </a>
        <small className="copyright">™ © 2020 Loop's List. All rights reserved.</small>
      </Container>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  padding: 45px 20px 80px;

  .email,
  .copyright {
    display: block;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
  }

  .email {
    text-align: center;
    color: ${(props) => props.theme.colors.blue};
    margin-bottom: 10px;
  }

  .socials {
    ${(props) => props.theme.flexCenter}
    margin-bottom: 30px;

    .social-item {
      svg {
        width: 48px;
        height: auto;
        color: ${(props) => props.theme.colors.blue};
      }
    }
  }
`;

export default Footer;
