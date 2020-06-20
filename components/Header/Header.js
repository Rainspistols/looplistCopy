import styled from '@emotion/styled';
import NavMenu from '../NavMenu/NavMenu';
import Logo from '../../UI/Logo';
import CookieAgreement from '../../UI/CookieAgreement';
import Container from '../../layouts/Container';
import InfoBar from '../../UI/InfoBar';

const Header = () => {
  return (
    <>
      <InfoBar />
      <HeaderStyled>
        <CookieAgreement />

        <Container>
          <div className="header__wrap">
            <Logo color="black" />

            <NavMenu />
          </div>
        </Container>
      </HeaderStyled>
    </>
  );
};

const HeaderStyled = styled.header`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.white};
  padding: 10px 0;

  .header__wrap {
    ${(props) => props.theme.flexBetween};
    flex-wrap: wrap;
  }

  ${(props) => props.theme.mediaTablet} {
    margin-bottom: 90px;
    padding: 50px 0;

    .header__wrap {
      justify-content: space-between;
      align-items: center;
      margin: 0;
    }
  }
`;

export default Header;
