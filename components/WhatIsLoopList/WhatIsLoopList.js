import styled from '@emotion/styled';
import Container from '../../layouts/Container/Container';

const WhatIsLoopList = () => {
  const data = [
    {
      title: 'Why Code?',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta provident amet ut dolor tempore saepe at dolores labore officia!',
    },
    {
      title: 'ABC’s of Code',
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptates labore aliquam porro, mollitia dignissimos nulla soluta perferendis modi eius.',
    },
  ];

  return (
    <Container>
      <WhatIsLoopListStyled>
        <h2>What’s Loop’s List?</h2>
        <p>
          Loop's List introduces foundations of software development and how they can be applied to our everyday lives.
          No computer required!
        </p>

        <ul>
          {data.map(({ title, text }, index) => (
            <li key={index}>
              <span>{title}</span>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </WhatIsLoopListStyled>
    </Container>
  );
};

const WhatIsLoopListStyled = styled.section`
  padding: 30px 0;
  h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 32px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 50px;
  }

  ul {
    li {
      display: flex;
      flex-direction: column;

      :nth-of-type(1) {
        span {
          padding: 20px;
          background-image: url(./images/backgroundShape1.svg);
        }
        p {
          color: #1dd1a3;
        }
      }

      :nth-of-type(2) {
        span {
          padding: 14px;
          background-image: url(./images/backgroundShape2.svg);
        }
        p {
          color: #fc7ed2;
        }
      }

      span {
        color: ${(props) => props.theme.colors.white};
        background-size: contain;
        background-repeat: no-repeat;
        font-size: 30px;
        line-height: 36px;
        font-weight: 700;
        margin: 0 auto 20px;
      }
    }
  }

  ${(props) => props.theme.mediaTablet} {
    h2 {
      font-size: 66px;
      line-height: 69px;
      margin-bottom: 33px;
    }

    p {
      font-size: 40px;
      line-height: 42px;
      margin-bottom: 266px;
    }

    ul {
      li {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 182px;

        span {
          font-size: 40px;
          line-height: 42px;
          width: 40%;
          margin: 0;
          ${(props) => props.theme.flexCenter};
          background-position: center;
        }

        p {
          font-size: 34px;
          line-height: 36px;
          width: 40%;
          margin: 0;
        }

        :nth-of-type(1) {
          span {
            padding: 30px;
          }
        }

        :nth-of-type(2) {
          span {
            order: 2;
            padding: 22px;
          }
          p {
            order: 1;
          }
        }
      }
    }
  }
`;

export default WhatIsLoopList;
