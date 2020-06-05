import styled from '@emotion/styled';

const ColorfulSeparater = ({ color }) => {
  return <ColorfulSeparaterStyled style={{ background: color }} />;
};

const ColorfulSeparaterStyled = styled.div`
  height: 100px;
`;

export default ColorfulSeparater;
