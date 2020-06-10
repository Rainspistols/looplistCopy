import styled from '@emotion/styled';
import Link from 'next/link';
import Container from '../../layouts/Container/Container';
import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo">
        <Container>
          <Link href="/">
            <a>
              <h3>Loop's List</h3>
            </a>
          </Link>
        </Container>
      </div>
      <Container>
        <NavMenu />
      </Container>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  color: ${(props) => props.theme.colors.white};

  .logo {
    ${(props) => props.theme.flexCenter}
    background: ${(props) => props.theme.colors.black};
    padding: 30px 0;
  }

  h3 {
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    font-size: 31px;
  }
`;

export default Header;
