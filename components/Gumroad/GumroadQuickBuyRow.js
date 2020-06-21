import styled from '@emotion/styled';
import DownloadOrBuyButton from '../DownloadOrBuyButton/DownloadOrBuyButton';
import { useState, useEffect } from 'react';
import GumroadBuyPage from './GumroadBuyPage';
import useWindowDimension from '../../hooks/useWindowDimension';

const GumroadQuickBuyRow = ({ gumroadAllProducts }) => {
  const [isGumroadPageVisible, setGumroadPageVisible] = useState(false);
  const [gumroadItem, setGumroadItem] = useState(null);
  const { width } = useWindowDimension();
  const [stateWidth, setStateWidth] = useState(null);

  useEffect(() => {
    setGumroadItem(gumroadAllProducts.products[0]);
    setStateWidth(width);
  }, [gumroadAllProducts, width]);

  return (
    <GumroadQuickBuyRowStyled>
      <h2>{gumroadItem && gumroadItem.custom_summary}</h2>
      <DownloadOrBuyButton
        isDownload={false}
        onBuyButton={() => setGumroadPageVisible(true)}
        width={stateWidth < 768 ? '100%' : '32%'}
      />

      {isGumroadPageVisible && (
        <GumroadBuyPage onOverlay={() => setGumroadPageVisible(false)} src={gumroadItem.short_url} />
      )}
    </GumroadQuickBuyRowStyled>
  );
};

const GumroadQuickBuyRowStyled = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap;

  ${({ theme }) => theme.mediaTablet} {
    h2 {
      width: 60%;
    }
  }
`;

export default GumroadQuickBuyRow;
