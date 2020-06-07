import Main from '../../layouts/Main/Main';
import { createClient } from 'contentful';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Container from '../../layouts/Container/Container';

const AbcsItem = ({
  //  rowData,
  modifiedData,
}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(modifiedData);
  }, [modifiedData]);

  return (
    <Main headTitle="item">
      <AbcsItemStyled>
        <Container>
          {data && (
            <>
              <img src={data[0].img} alt={data[0].alt} />
              <h1>{data[0].title}</h1>
              <h2>{data[0].alt}</h2>
              <p>{data[0].p}</p>
            </>
          )}
        </Container>
      </AbcsItemStyled>
    </Main>
  );
};

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { slug: '' } }],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const neededDataItem = await client.getEntries({
    content_type: 'contentPage',
    'fields.slug[in]': context.params.slug,
  });

  return {
    props: {
      // rowData: neededDataItem,
      modifiedData: neededDataItem.items.map((item) => ({
        alt: item.fields.description,
        title: item.fields.title,
        img: item.fields.primaryImage.fields.file.url,
        p: item.fields.body.content[0].content[0].value,
      })),
    },
  };
};

const AbcsItemStyled = styled.section`
  img {
    width: 50%;
    margin: 0 auto 20px auto;
  }

  h1 {
    font-size: 30px;
    line-height: 40px;
    font-weight: 600;
    text-align: center;
  }

  h2 {
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 50px;
  }
  p {
    background: ${(props) => props.theme.colors.whiteSmoke};
    padding: 20px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export default AbcsItem;
