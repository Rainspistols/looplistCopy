import Main from '../../layouts/Main/Main';
import AbcsOfCoding from '../../components/AbcsOfCoding/AbcsOfCoding';
import ContentfulService from '../../services/contentful';

const Alphabet = ({ allContentPageItems }) => {
  return (
    <Main headTitle="abcs-of-code">
      <AbcsOfCoding data={allContentPageItems} />
    </Main>
  );
};

export const getStaticProps = async () => {
  const contentfulService = new ContentfulService();
  const allContentPageItems = await contentfulService.getAllContentPage();

  return {
    props: {
      allContentPageItems,
    },
  };
};

export default Alphabet;
