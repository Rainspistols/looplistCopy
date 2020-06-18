import styled from '@emotion/styled';
import { TiArrowLoopOutline } from 'react-icons/ti';
import Link from 'next/link';

const Logo = ({ color }) => {
  return (
    <LogoStyled>
      <Link href="/">
        <a style={{ color: color }}>
          <TiArrowLoopOutline />
        </a>
      </Link>
    </LogoStyled>
  );
};

const LogoStyled = styled.div`
  width: 100%;
  margin-bottom: 10px;
  transition: all 0.3s ease-out;

  :hover, :focus {
    transform: scale(1.1);
    
  }

  a svg {
    width: 80px;
    height: auto;
  }

  ${(props) => props.theme.mediaTablet} {
    width: auto;
    margin: 0;
  }

  a svg {
    width: 140px;
    height: auto;
  }
`;

export default Logo;
