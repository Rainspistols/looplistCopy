import styled from '@emotion/styled';
import Container from '../../layouts/Container';

const Hero = () => {
  return (
    <HeroStyled>
      <Container>
        <h2>Loop’s List introduces coding and technology concepts!</h2>
      </Container>
    </HeroStyled>
  );
};

const HeroStyled = styled.section`
  background: ${(props) => props.theme.colors.whiteSmoke};
  padding: 40px 0;

  h2 {
    color: ${(props) => props.theme.colors.black};
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    font-weight: 400;
  }
`;

export default Hero;
