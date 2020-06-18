import DownloadLink from './DownloadLink';
import DownloadButton from './DownloadButton';

const DownloadLinkOrButton = ({ isButton, onButtonClick }) => {
  return isButton ? <DownloadButton onButtonClick={onButtonClick} /> : <DownloadLink />;
};

export default DownloadLinkOrButton;
