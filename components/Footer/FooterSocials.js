import styled from '@emotion/styled';
import { GrTwitter } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';

const FooterSocials = () => {
  return (
    <FooterSocialsStyled>
      <a className="social-item" href="https://www.instagram.com/loopslist/" target="_blank" rel="noopener noreferrer">
        <AiOutlineInstagram />
      </a>

      <a className="social-item" href="https://twitter.com/loopslist" target="_blank" rel="noopener noreferrer">
        <GrTwitter />
      </a>
    </FooterSocialsStyled>
  );
};

const FooterSocialsStyled = styled.div`
  ${(props) => props.theme.flexCenter}
  margin-bottom: 30px;

  .social-item {
    svg {
      width: 48px;
      height: auto;
      color: ${(props) => props.theme.colors.white};
    }

    :not(:last-child) {
      margin-right: 20px;
    }
  }

  ${(props) => props.theme.mediaTablet} {
    .social-item {
      :not(:last-child) {
        margin-right: 50px;
      }

      transition: all 0.3s ease-out;

      :hover,
      :focus {
        transform:scale(1.2);
      }

      :hover svg,
      :focus svg {
        color: ${(props) => props.theme.colors.orange};
      }
    }
  }
`;

export default FooterSocials;
