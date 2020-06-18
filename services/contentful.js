import { createClient } from 'contentful';

export const CONTENT_TYPE_CONTENTPAGE = 'contentPage';

export default class ContentfulService {
  Space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  Token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  client = createClient({
    space: this.Space,
    accessToken: this.Token,
  });

  getAllContentPage = async () => {
    const contentPageItems = await this.client.getEntries({
      content_type: CONTENT_TYPE_CONTENTPAGE,
    });

    const contentPageTransformed = this._transformContentPageItems(contentPageItems);
    return await contentPageTransformed.sort((a, b) => ('' + a.slug).localeCompare(b.slug));
  };

  _transformContentPageItems = (contentPageItems) => {
    return contentPageItems.items.map((item) => ({
      alt: item.fields.description,
      slug: item.fields.slug,
      img: item.fields.primaryImage.fields.file.url,
    }));
  };

  getSpecificContentPageItemBySlug = async (slug) => {
    const spesificItem = await this.client.getEntries({
      content_type: CONTENT_TYPE_CONTENTPAGE,
      'fields.slug[in]': slug,
    });
    // FOR TESTS
    // console.log(spesificItem.items.map((item) => item.fields.product));
    return this._transformSpecificContentPageItem(spesificItem);
  };
  _transformSpecificContentPageItem = (spesificItem) => {
    return spesificItem.items.map((item) => ({
      alt: item.fields.description,
      title: item.fields.title,
      imgUrl: item.fields.primaryImage.fields.file.url,
      description: item.fields.body.content[0].content[0].value,
      productTitle: item.fields.product ? item.fields.product.fields.productTitle : null,
      productDesctiption: item.fields.product
        ? item.fields.product.fields.productName.content[0].content[0].value
        : null,
      productImgUrl:
        item.fields.product == undefined || item.fields.product.fields.primaryImage.fields == undefined
          ? null
          : item.fields.product.fields.primaryImage.fields.file.url,
    }));
  };
}
