import styled from '@emotion/styled';
import Container from '../../layouts/Container/Container';
import Link from 'next/link';

const AbcsOfCoding = ({ data }) => {
  return (
    <AbcsOfCodingStyled>
      <Container>
        <h2>ABCs of Coding</h2>
        <p className="slogan">A coding and technology concept for each letter of the alphabet!</p>
        <ul>
          {data.map(({ img, alt, slug }, index) => (
            <li key={index}>
              <Link href="/abcs-of-code/[slug]" as={`/abcs-of-code/${slug}`}>
                <a>
                  <picture>
                    <source media="(min-width: 768px)" srcSet={img + '?w=310'} />
                    <img src={img + '?w=728'} alt={alt} />
                  </picture>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </AbcsOfCodingStyled>
  );
};

const AbcsOfCodingStyled = styled.section`
  padding: 50px 0 20px;
  background: ${(props) => props.theme.colors.whiteSmoke};
  h2 {
    font-size: 30px;
    line-height: 36px;
    color: ${(props) => props.theme.colors.black};
    opacity: 0.7;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .slogan {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 30px;
  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      justify-content: center;

      :not(:last-child) {
        margin-bottom: 25px;
      }
    }
  }

  ${(props) => props.theme.mediaTablet} {
    ul {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;

      li {
        display: flex;
        justify-content: center;
        width: 32%;

        :not(:last-child),
        :last-child {
          margin-bottom: 30px;
        }

        :not(:nth-of-type(3n)) {
          margin-right: 2%;
        }
      }
    }
  }
`;

export default AbcsOfCoding;
