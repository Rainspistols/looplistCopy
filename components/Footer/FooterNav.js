import styled from '@emotion/styled';
import NavMenu from '../NavMenu/NavMenu';
import Logo from '../../UI/Logo';

const FooterNav = () => {
  return (
    <FooterNavStyled>
      <Logo color="white" />
      <NavMenu />
    </FooterNavStyled>
  );
};

const FooterNavStyled = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  .NavMenu {
    margin: 0;
    ul {
      flex-direction: column;

      li {
        margin: 0;

        a {
          color: ${(props) => props.theme.colors.white};
        }
      }
    }
  }
  ${(props) => props.theme.mediaTablet} {
    justify-content: space-between;
    margin-bottom: 85px;

    .NavMenu {
      padding-right: 160px;

      ul {
        li {
          margin-bottom: 24px;
          :not(:last-of-type) {
            font-size: 24px;
            line-height: 25px;
          }
          :last-of-type {
            margin: 0;
          }
        }
      }
    }
  }
`;

export default FooterNav;
