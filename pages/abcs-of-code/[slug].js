import Main from '../../layouts/Main/Main';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Container from '../../layouts/Container/Container';
import ContentfulService from '../../services/contentful';
import { useRouter } from 'next/router';
import PopUpEmail from '../../components/PopUpEmail/PopUpEmail';
import GumroadService from '../../services/gumroad';
import GumroadBuyPage from '../../components/GumroadBuyPage/GumroadBuyPage';
import DonwloadOrBuyButton from '../../components/DownloadOrBuyButton/DownloadOrBuyButton';
// import DownloadLinkOrButton from '../../components/DownloadLinkOrButton';

const AbcsItem = ({ spesificContentBySlug, allGumroadItems }) => {
  const [contentfulData, setContentfulData] = useState(null);
  const [gumroadData, setGumroadData] = useState(null);
  const [isDownloadPopupActive, setDownloadPopupActive] = useState(false);
  const [isGumroadBuyPageVisible, setGumroadBuyPageVisible] = useState(false);
  console.log(allGumroadItems);

  const onPopupClose = () => {
    setDownloadPopupActive(false);
  };

  useEffect(() => {
    setContentfulData(spesificContentBySlug[0]);
    setGumroadData(allGumroadItems.products[0]);
  }, [spesificContentBySlug, allGumroadItems]);

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    contentfulData &&
    gumroadData && (
      <Main headTitle={"Loop's list | " + contentfulData.title}>
        <AbcsItemStyled>
          <Container>
            {router.isFallback ? <div>Loading...</div> : null}
            <div className="wholeWrap">
              <picture>
                <source media="(min-width: 768px)" srcSet={contentfulData.imgUrl + '?w=400'} />
                <img src={contentfulData.imgUrl + '?w=726'} alt={contentfulData.alt} />
              </picture>
              <div className="contentWrap">
                <h1 className="title">{contentfulData.title}</h1>
                <h2 className="short-description">{contentfulData.alt}</h2>
                <p className="long-description">{contentfulData.description}</p>
              </div>

              <div className="downloadWrap">
                <div className="buttonSloganWrap">
                  <p className="slogan-to-download">{contentfulData.productDesctiption}</p>

                  <DonwloadOrBuyButton
                    isDownload={contentfulData.productImgUrl === null ? false : true}
                    onDownloadButton={() => setDownloadPopupActive(true)}
                    onBuyButton={() => setGumroadBuyPageVisible(true)}
                  />

                  {/* 
                  <DownloadLinkOrButton
                    isButton={contentfulData.productImgUrl === null ? false : true}
                    onButtonClick={() => setDownloadPopupActive(true)}
                  /> */}

                  {isGumroadBuyPageVisible ? (
                    <GumroadBuyPage src={gumroadData.short_url} onOverlay={() => setGumroadBuyPageVisible(false)} />
                  ) : null}
                </div>

                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet={
                      contentfulData.productImgUrl === null
                        ? gumroadData.preview_url
                        : contentfulData.productImgUrl + '?w=400'
                    }
                  />
                  <img
                    className="imgPreview"
                    src={
                      contentfulData.productImgUrl === null
                        ? gumroadData.preview_url
                        : contentfulData.productImgUrl + '?w=726'
                    }
                    alt={contentfulData.title}
                  />
                </picture>
              </div>
            </div>
          </Container>
        </AbcsItemStyled>

        {isDownloadPopupActive && contentfulData ? (
          <PopUpEmail
            onPopupClose={onPopupClose}
            downloadLink={contentfulData.productImgUrl}
            downloadBtnName={'Download ' + contentfulData.productTitle}
          />
        ) : null}
      </Main>
    )
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

  const gumroadService = new GumroadService();
  const allGumroadItems = await gumroadService.getGumroadAllProducts();

  return {
    props: {
      spesificContentBySlug,
      allGumroadItems,
    },
  };
};

const AbcsItemStyled = styled.section`
  picture {
    margin-bottom: 12px;

    img {
      width: 100%;
    }
  }

  .wholeWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .title {
    font-size: 54px;
    line-height: 57px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  .short-description,
  .long-description,
  .slogan-to-download {
    font-size: 24px;
    line-height: 25px;
    font-weight: 400;
  }

  .short-description {
    margin-bottom: 50px;
  }

  .long-description {
    margin-bottom: 60px;
  }

  .slogan-to-download {
    margin-bottom: 30px;
  }

  .imgPreview {
    margin-bottom: 50px;
    width: 100%;
  }

  /* .downloadButtonOrLink {
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
  } */

  ${(props) => props.theme.mediaTablet} {
    margin-bottom: 100px;
    picture {
      width: 55%;
    }

    .contentWrap {
      width: 45%;
    }
    .wholeWrap {
      align-items: flex-start;
    }

    .title {
      margin-bottom: 35px;
    }

    .short-description,
    .long-description,
    .slogan-to-download {
      font-size: 34px;
      line-height: 36px;
    }

    .short-description {
      margin-bottom: 56px;
    }

    .long-description {
      margin-bottom: 240px;
    }

    .downloadWrap {
      display: flex;
      flex-wrap: wrap;
    }

    .slogan-to-download {
      margin-bottom: 20px;
    }
/* 
    .downloadButtonOrLink {
      max-width: 370px;
    } */

    .buttonSloganWrap {
      order: 2;
      max-width: 45%;
    }

    .downloadWrap {
      picture {
        order: 1;
      }
    }
  }
`;

export default AbcsItem;
