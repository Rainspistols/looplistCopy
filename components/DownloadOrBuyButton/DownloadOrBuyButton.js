import styled from '@emotion/styled';

const DonwloadOrBuyButton = ({ isDownload, onBuyButton, onDownloadButton }) => {
  return (
    <DonwloadOrBuyButtonStyled onClick={() => (isDownload ? onDownloadButton() : onBuyButton())}>
      {isDownload ? 'Download Actvity for free' : 'Buy all activities for 1.99$'}
    </DonwloadOrBuyButtonStyled>
  );
};

const DonwloadOrBuyButtonStyled = styled.button`
  width: 100%;
  background: ${(props) => props.theme.colors.blue};
  border-radius: 5px;
  display: block;
  color: ${(props) => props.theme.colors.white};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin: 0 0 46px;
  font-size: 26px;
  line-height: 28px;
  padding: 20px 10px;
  box-sizing: border-box;
  text-align: center;

  :hover,
  :focus {
    background: ${(props) => props.theme.colors.brown};
  }

  ${(props) => props.theme.mediaTablet} {
    max-width: 370px;
    font-size: 26px;
    line-height: 28px;
  }
`;

export default DonwloadOrBuyButton;
