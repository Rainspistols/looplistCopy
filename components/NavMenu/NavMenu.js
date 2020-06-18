import styled from '@emotion/styled';
import Link from 'next/link';

const NavMenu = () => {
  const data = [
    { href: '/abcs-of-code', title: 'ABCs of Code' },
    { href: '/about', title: 'About' },
  ];

  return (
    <NavMenuStyled className="NavMenu">
      <ul>
        {data.map(({ href, title }, index) => (
          <li key={index}>
            <Link href={href}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </NavMenuStyled>
  );
};

const NavMenuStyled = styled.section`
  margin-bottom: 20px;
  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    margin-right: 54px;
  }

  a {
    white-space: nowrap;
    color: ${(props) => props.theme.colors.black};
    font-size: 20px;
  }

  ${(props) => props.theme.mediaTablet} {
    margin: 0;

    li {
      transition: all 0.3s ease-out;

      :last-of-type {
        margin: 0;
      }

      :hover,
      :focus {
        transform: scale(1.1);
        
      }

      :hover a,
      :focus a {
        color: ${(props) => props.theme.colors.orange};
      }
    }

    a {
      font-size: 28px;
      line-height: 34px;
      transition: color 0.3s ease-out;
    }
  }
`;

export default NavMenu;
