import Main from '../../../layouts/Main/Main';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Container from '../../../layouts/Container/Container';
import ContentfulService from '../../../services/contentful';
import { useRouter } from 'next/router';
import PopUpEmail from '../../../components/PopUpEmail/PopUpEmail';

const AbcsItem = ({ spesificContentBySlug }) => {
  console.log('test-2');
  const [data, setData] = useState(null);
  const [isDownloadPopupActive, setDownloadPopupActive] = useState(false);

  const onPopupClose = () => {
    setDownloadPopupActive(false);
  };

  useEffect(() => {
    setData(spesificContentBySlug);
  }, [spesificContentBySlug]);

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Main headTitle="item">
      <AbcsItemStyled>
        <Container>
          {router.isFallback ? <div>Loading...</div> : null}
          {data && (
            <div className="wholeWrap">
              <img src={data[0].img} alt={data[0].alt} />
              <div className="contentWrap">
                <h1>{data[0].title}</h1>
                <h2>{data[0].alt}</h2>
                <p>{data[0].p}</p>
                <button onClick={() => setDownloadPopupActive(true)}>Download assets</button>
              </div>
            </div>
          )}
        </Container>
      </AbcsItemStyled>

      {isDownloadPopupActive ? <PopUpEmail onPopupClose={onPopupClose} /> : null}
    </Main>
  );
};

export const getStaticPaths = async () => {
  const contenfulService = new ContentfulService();
  const itemsList = await contenfulService.getAllContentPage();

  const paths = itemsList.map((item) => ({ params: { slug: item.slug } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const contenfulService = new ContentfulService();
  const spesificContentBySlug = await contenfulService.getSpecificContentPageItemBySlug(context.params.slug);

  return {
    props: {
      spesificContentBySlug,
    },
  };
};

const AbcsItemStyled = styled.section`
  img {
    width: 100%;
  }

  .wholeWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  h1 {
    font-size: 30px;
    line-height: 40px;
    font-weight: 700;
    text-transform: uppercase;
  }

  h2 {
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  p {
    background: ${(props) => props.theme.colors.whiteSmoke};
    padding: 20px;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;
  }

  button {
    height: 50px;
    width: 50%;
    background: ${(props) => props.theme.colors.blue2};
    border-radius: 5px;
    display: block;
    color: ${(props) => props.theme.colors.white};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin: 0 auto;

    :hover,
    :focus {
      background: ${(props) => props.theme.colors.brown};
    }
  }

  ${(props) => props.theme.mediaTablet} {
    img {
      width: 40%;
    }

    .contentWrap {
      width: 50%;
    }
  }
`;

export default AbcsItem;
