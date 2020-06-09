import styled from '@emotion/styled';
import { IoIosMenu } from 'react-icons/io';
import Link from 'next/link';

const NavMenu = () => {
  return (
    <NavMenuStyled>
      {/* <button className="menuIcon"> */}
      <Link href="/">
        <a className="menuIcon">
          <IoIosMenu />
        </a>
      </Link>

      <Link href="/abcs-of-code">
        <a className="absCodeLink">ABCs of Code</a>
      </Link>

      {/* </button> */}
    </NavMenuStyled>
  );
};

const NavMenuStyled = styled.section`
padding: 20px 0;
  .menuIcon {
    height: 52px;
    min-width: 52px;
    ${(props) => props.theme.flexCenter}
    

    svg {
      width: 24px;
      height: auto;
      color: white;
    }
  }

  .absCodeLink {
    display: none;
  }

  @media (min-width: 400px) {
    display: block;
    .menuIcon {
      display: none;
    }

    .absCodeLink {
      display: flex;
      white-space: nowrap;
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;

export default NavMenu;
