import Main from '../../layouts/Main/Main';
import AbcsOfCoding from '../../components/AbcsOfCoding/AbcsOfCoding';
import { createClient } from 'contentful';

const Alphabet = ({ abcsData }) => {
  return (
    <Main headTitle="abcs-of-code">
      <AbcsOfCoding data={abcsData} />
    </Main>
  );
};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticProps = async () => {
  const entries = await client.getEntries({
    content_type: 'contentPage',
  });

  return {
    props: {
      abcsData: entries.items.map((item) => ({
        alt: item.fields.description,
        slug: item.fields.slug,
        img: item.fields.primaryImage.fields.file.url,
      })),
    },
  };
};

export default Alphabet;
