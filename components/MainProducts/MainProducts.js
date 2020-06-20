import styled from '@emotion/styled';
import { img1, img2, img3 } from './images';
import Container from '../../layouts/Container';

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
    </MainProductsStyled>
  );
};

const MainProductsStyled = styled.section`
  .products {
    margin: 50px 0;

    ul {
      display: flex;
      li {
        img {
          margin: 0 auto;
        }
      }
    }
  }

  ${(props) => props.theme.mediaTablet} {
    .products {
      ul {
        ${(props) => props.theme.flexBetween};
        flex-wrap: wrap;
        li {
          width: 33.3333333%;
        }
      }
    }
  }
`;

export default MainProducts;
