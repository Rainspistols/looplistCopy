import styled from '@emotion/styled';
import Link from 'next/link';
import logoImg from './logoImg.png';

const Logo = ({ color }) => {
  return (
    <LogoStyled>
      <Link href="/">
        <a style={{ color: color }}>
          <img src={logoImg} alt="Loop's list logo" />
        </a>
      </Link>
    </LogoStyled>
  );
};

const LogoStyled = styled.div`
  width: 100%;
  margin-bottom: 10px;
  transition: all 0.3s ease-out;

  :hover,
  :focus {
    transform: scale(1.1);
  }


  ${(props) => props.theme.mediaTablet} {
    width: auto;
    margin: 0;
  }

`;

export default Logo;
