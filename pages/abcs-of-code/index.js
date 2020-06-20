import AbcsOfCoding from '../../components/AbcsOfCoding/AbcsOfCoding';
import ContentfulService from '../../services/contentful';
import Main from '../../layouts/Main';

const Alphabet = ({ allContentPageItems }) => {
  return (
    <Main headTitle="Abcs-of-code">
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
