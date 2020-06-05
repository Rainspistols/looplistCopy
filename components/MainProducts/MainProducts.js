import styled from '@emotion/styled';
import { img1, img2, img3 } from './images';
import Container from '../../layouts/Container/Container';

const MainProducts = () => {
  const data = [
    { img: img2, alt: 'while nap_time' },
    { img: img3, alt: "what's a 'float'" },
    { img: img1, alt: 'aaarg' },
  ];

  return (
    <MainProductsStyled>
      <Container>
        <section className="products">
          <ul>
            {data.map(({ img, alt }, index) => (
              <li key={index}>
                <img src={img} alt={alt} />
              </li>
            ))}
          </ul>
        </section>
      </Container>

      <div className="blueSeparater" />
    </MainProductsStyled>
  );
};

const MainProductsStyled = styled.section`
  .products {
    margin: 50px 0;

    ul li {
      :not(:last-child) {
        margin-bottom: 50px;
      }

      img {
        margin: 0 auto;
      }
    }
  }

  .blueSeparater {
    height: 100px;
    background: ${(props) => props.theme.colors.blue};
  }

  @media (min-width: 768px) {
    .products {
      ul {
        ${(props) => props.theme.flexBetween};
        flex-wrap: wrap;
        li {
          width: 31%;
          margin-bottom: 30px;
          :not(:last-child) {
            margin-bottom: 30px;
          }
        }
      }
    }
  }
`;

export default MainProducts;
