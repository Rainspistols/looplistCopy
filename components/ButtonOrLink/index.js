import DownloadButton from './DownloadButton';
import DownloadLink from './DownloadLink';

const ButtonOrLink = ({ isButton, onButtonClick, href }) => {
  return isButton ? <DownloadButton onButtonClick={onButtonClick} /> : <DownloadLink href={href} />;
};

export default ButtonOrLink;
