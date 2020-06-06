import styled from '@emotion/styled';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from './images/';
import Container from '../../layouts/Container/Container';

const Products = () => {
  const data = [
    { img: img1, alt: 'def' },
    { img: img2, alt: 'what does a byte do?' },
    { img: img3, alt: 'brush_teeth' },
    { img: img4, alt: 'bugs need hugs' },
    { img: img5, alt: "what's a bit" },
    { img: img6, alt: "'this's is' + 'a string'" },
    { img: img7, alt: "what's a bug" },
    { img: img8, alt: "c = 'cat'" },
    { img: img9, alt: "['hooray', 'for', 'arrays!']" },
  ];

  return (
    <ProdutcsStyled>
      <Container>
        <h2>
          Follow along on{' '}
          <a href="https://www.instagram.com/loopslist/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{' '}
          for coding basics and stories.
        </h2>

        <ul>
          {data.map(({ img, alt }, index) => (
            <li key={index}>
              <img src={img} alt={alt} />
            </li>
          ))}
        </ul>
      </Container>
    </ProdutcsStyled>
  );
};

const ProdutcsStyled = styled.section`
  padding: 80px 0 40px;
  background: ${(props) => props.theme.colors.whiteSmoke};
  h2 {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 24px;
    font-weight: 300;
    color: ${(props) => props.theme.colors.brown};

    a {
      color: ${(props) => props.theme.colors.blue};
    }
  }

  ul li {
    :not(:last-child) {
      margin-bottom: 20px;
    }

    img {
      margin: 0 auto;
    }
  }

  ${(props) => props.theme.mediaTablet} {
    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      li {
        width: 32%;
        margin-bottom: 50px;

        :not(:nth-of-type(3n)) {
          margin-right: 2%;
        }
        :not(:last-child) {
          margin-bottom: 50px;
        }
      }
    }
  }
`;

export default Products;
