import styled from '@emotion/styled';
import { IoMdMail } from 'react-icons/io';
import Container from '../../layouts/Container/Container';
import Newsletter from '../Newsletter/Newsletter';
import FooterSocials from './FooterSocials';
import FooterNav from './FooterNav';

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Newsletter />
        <FooterNav />
        <FooterSocials />

        <a className="email" href="mailto:hello@loopslist.com">
          <span>
            <IoMdMail />
          </span>
          Send us a email
        </a>
        <small className="copyright">© 2020 Loop's List. All rights reserved.</small>
      </Container>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  padding: 45px 20px 80px;
  background: ${(props) => props.theme.colors.pink2};

  .email,
  .copyright {
    display: block;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
  }

  .email {
    color: ${(props) => props.theme.colors.orange};
    margin-bottom: 10px;
    ${(props) => props.theme.flexCenter};

    span {
      ${(props) => props.theme.flexCenter};
      margin-right: 10px;
    }

    svg {
      width: 30px;
      height: auto;
    }
  }

  .copyright {
    color: ${(props) => props.theme.colors.white};
    font-weight: 300;
  }

  ${(props) => props.theme.mediaTablet} {
    padding: 30px 150px;
    margin: 0 auto;

    .copyright {
      font-size: 24px;
      line-height: 25px;
    }

    .email {
      font-size: 24px;
      line-height: 25px;
      transition: all 0.3s ease-out;
    }
  }
`;

export default Footer;
