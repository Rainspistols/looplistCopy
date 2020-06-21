import InstagramEmbed from 'react-instagram-embed';
import { useState } from 'react';
import styled from '@emotion/styled';

// you can find this component commented on main index.js

const InstagramEmbedCard = () => {
  const [isLoading, setLoading] = useState(true);
  return (
    <InstagramEmbedCardStyled>
      {isLoading ? '...Loading' : null}
      <InstagramEmbed
        url="https://instagr.am/p/Zw9o4/"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
        hideCaption={true}
        onLoading={() => setLoading(false)}
      />
    </InstagramEmbedCardStyled>
  );
};

const InstagramEmbedCardStyled = styled.li``;

export default InstagramEmbedCard;
