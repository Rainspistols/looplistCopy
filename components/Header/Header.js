import styled from '@emotion/styled';
import Link from 'next/link';
import Container from '../../layouts/Container/Container';
import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <nav role="navigation" aria-label="main navigation">
          <div className="logo">
            <Link href="/">
              <a>
                <h3>Loop's List</h3>
              </a>
            </Link>
          </div>

          <NavMenu />
        </nav>
      </Container>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 20px 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      color: ${(props) => props.theme.colors.white};
      font-weight: bold;
      font-size: 21px;
      
    }
  }

  .logo {
    width: 100%;
    ${(props) => props.theme.flexBetween}
    padding: 8px 0;
    display: inline-flex;
  }
`;

export default Header;
