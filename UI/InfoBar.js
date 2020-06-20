import styled from '@emotion/styled';
import Container from '../layouts/Container';

const InfoBar = () => {
  return (
    <InfoBarStyled>
      <Container>
        <p>Info Bar for Stuff</p>
      </Container>
    </InfoBarStyled>
  );
};

const InfoBarStyled = styled.div`
  background: ${(props) => props.theme.colors.blue};

  p {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    padding: 10px 0;
    font-weight: 700;
    font-size: 16;
    line-height: 20px;
  }

  ${(props) => props.theme.mediaTablet} {
    font-size: 24px;
    line-height: 25px;
    padding: 18px 0;
  }
`;

export default InfoBar;
