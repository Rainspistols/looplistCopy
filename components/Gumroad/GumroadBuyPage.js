import styled from '@emotion/styled';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import { useRef } from 'react';
import { useState } from 'react';

const GumroadBuyPage = ({ src, onOverlay }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onOverlay);
  const [isLoading, setLoading] = useState(true);

  return (
    <GumroadBuyPageStyled src={src}>
      {isLoading ? '...Loading' : null}
      <iframe src={src} frameBorder="0" ref={wrapperRef} onLoad={() => setLoading(false)} />
    </GumroadBuyPageStyled>
  );
};

const GumroadBuyPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.beigeLightTransparent};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  iframe {
    padding: 20px;
    width: 75%;
    height: 85%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    transform-origin: 0 0;
  }
`;

export default GumroadBuyPage;
