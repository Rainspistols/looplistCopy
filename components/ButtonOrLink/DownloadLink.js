import styled from '@emotion/styled';

const DownloadLink = ({ href }) => {
  return (
    <DownloadLinkStyled href={href} target="_blank" rel="noopener noreferrer">
      Download all activities for 1.99$
    </DownloadLinkStyled>
  );
};

const DownloadLinkStyled = styled.a`
  width: 100%;
  background: ${(props) => props.theme.colors.blue};
  border-radius: 5px;
  display: block;
  color: ${(props) => props.theme.colors.white};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin: 0 0 46px;
  font-size: 36px;
  line-height: 38px;
  padding: 20px 10px;
  box-sizing: border-box;
  text-align: center;

  :hover,
  :focus {
    background: ${(props) => props.theme.colors.brown};
  }

  ${(props) => props.theme.mediaTablet} {
    max-width: 370px;
  }
`;

export default DownloadLink;
