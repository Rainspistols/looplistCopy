import styled from '@emotion/styled';
import Link from 'next/link';
import logoWhite from './logo--white.svg';
import logoBlack from './logo--black.svg';

const Logo = ({ color }) => {
  return (
    <LogoStyled>
      <Link href="/">
        <a>
          {color === 'black' ? (
            <img src={logoBlack} alt="Loop's list logo" />
          ) : (
            <img src={logoWhite} alt="Loop's list logo" />
          )}
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

  img {
    width: 189px;
    height: auto;
  }

  ${(props) => props.theme.mediaTablet} {
    width: auto;
    margin: 0;
  }
`;

export default Logo;
