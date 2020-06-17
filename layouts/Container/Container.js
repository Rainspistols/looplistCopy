import styled from '@emotion/styled';

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

const ContainerStyled = styled.div`
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 960px) {
    padding: 0 20px;
  }

  ${(props) => props.theme.mediaTablet} {
    padding: 0 60px;
  }
`;

export default Container;
