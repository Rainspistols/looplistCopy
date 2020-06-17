import Main from '../../layouts/Main/Main';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Container from '../../layouts/Container/Container';
import ContentfulService from '../../services/contentful';
import { useRouter } from 'next/router';
import PopUpEmail from '../../components/PopUpEmail/PopUpEmail';
import GumroadService from '../../services/gumroad';

const AbcsItem = ({ spesificContentBySlug, allGumroadItems }) => {
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
    data &&
    allGumroadItems && (
      <Main headTitle={data[0].title}>
        <AbcsItemStyled>
          <Container>
            {router.isFallback ? <div>Loading...</div> : null}
            <div className="wholeWrap">
              <picture>
                <source media="(min-width: 768px)" srcSet={data[0].img + '?w=400'} />
                <img src={data[0].img + '?w=726'} alt={data[0].alt} />
              </picture>
              <div className="contentWrap">
                <h1 className="title">{data[0].title}</h1>
                <h2 className="short-description">{data[0].alt}</h2>
                <p className="long-description">{data[0].p}</p>
              </div>

              <div className="downloadWrap">
                <div className="buttonSloganWrap">
                  <p className="slogan-to-download">{data[0].downloadDesctiption}</p>

                  {data[0].downloadImg === null ? (
                    <a
                      className="downloadButtonOrLink"
                      href={allGumroadItems.products[0].short_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy All activities for 1.99$
                    </a>
                  ) : (
                    <button className="downloadButtonOrLink" onClick={() => setDownloadPopupActive(true)}>
                      Download Actvity for free!
                    </button>
                  )}
                </div>

                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet={
                      data[0].downloadImg === null
                        ? allGumroadItems.products[0].preview_url
                        : data[0].downloadImg + '?w=400'
                    }
                  />
                  <img className="imgPreview" src={data[0].downloadImg + '?w=726'} alt={data[0].title} />
                </picture>
              </div>
            </div>
          </Container>
        </AbcsItemStyled>

        {isDownloadPopupActive && data ? (
          <PopUpEmail
            onPopupClose={onPopupClose}
            downloadLink={data[0].downloadImg}
            downloadBtnName={'Download ' + data[0].downloadTitle}
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

  .downloadButtonOrLink {
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
  }

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

    .downloadButtonOrLink {
      max-width: 370px;
    }

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
