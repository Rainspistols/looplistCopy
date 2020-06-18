import styled from '@emotion/styled';

const DownloadLink = () => {
  return (
    <DownloadLinkStyled>
      <a className="gumroad-button" href="https://gum.co/CXzNGz" id="custom_gumroad">
        Buy all assets for 1.99$
      </a>
    </DownloadLinkStyled>
  );
};

const DownloadLinkStyled = styled.div`
  #custom_gumroad {
    /* width: 100%; */
    background-color: ${(props) => props.theme.colors.blue} !important;
    /* border-radius: 5px; */
    /* display: block; */
    color: ${(props) => props.theme.colors.white} !important;
    transition: all 0.3s ease-in-out;
    /* cursor: pointer; */
    margin: 0 0 46px !important;
    font-size: 36px !important;
    line-height: 38px !important;
    padding: 20px 10px !important;
    /* box-sizing: border-box; */
    text-align: center;

    :hover,
    :focus {
      background: ${(props) => props.theme.colors.brown} !important;
    }
  }

  ${(props) => props.theme.mediaTablet} {
    max-width: 370px !important;

    span {
      display: none !important;
    }
  }
`;

export default DownloadLink;
