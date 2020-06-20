import styled from '@emotion/styled';
import { bugImg, catImg } from './images/';
import Container from '../../layouts/Container';

const CreatedBy = () => {
  const data = [
    { href: 'http://astridriemer.com/', src: catImg, name: 'Astrid Riemer', proffesion: 'designer' },
    {
      href: 'http://roomnoise.com/',
      src: bugImg,
      name: 'Marcus Smith',
      proffesion: 'software developer',
    },
  ];
  return (
    <CreatedByStyled>
      <Container>
        <h2>Created By</h2>

        <ul>
          {data.map(({ href, src, name, proffesion }, index) => (
            <li key={index}>
              <a href={href} rel="noopener noreferrer">
                <img src={src} alt="" />
                <h3>{name}</h3>
              </a>
              <h4>{proffesion}</h4>
            </li>
          ))}
        </ul>
      </Container>
    </CreatedByStyled>
  );
};

const CreatedByStyled = styled.section`
  background: ${(props) => props.theme.colors.orange};
  padding: 60px 0;
  color: ${(props) => props.theme.colors.white};

  h2 {
    font-size: 26px;
    line-height: 30px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  }

  ul {
    ${(props) => props.theme.flexBetween};
    flex-direction: column;

    li {
      :not(:last-child) {
        margin-bottom: 30px;
      }

      img {
        margin: 0 auto;
        width: 125px;
        height: 125px;
        margin-bottom: 10px;
      }

      h3 {
        font-size: 22px;
        line-height: 26px;
        font-weight: 600;
        text-align: center;
      }

      h4 {
        font-size: 18px;
        line-height: 22px;
        font-weight: 400;
        text-align: center;
      }
    }
  }

  ${(props) => props.theme.mediaTablet} {
    ul {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;

      li {
        :not(:last-child) {
          margin-bottom: 0;
          margin-right: 100px;
        }

        a {
          transition: all 0.3s ease-out;

          img {
            transition: all 0.3s ease-out;
          }

          :hover,
          :active {
            color: ${(props) => props.theme.colors.blue};
          }

          :hover img,
          :active img {
            transform: scale(1.2) translateY(-20px);
          }
        }
      }
    }
  }
`;

export default CreatedBy;
