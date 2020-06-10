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
    return this._transformSpecificContentPageItem(spesificItem);
  };
  _transformSpecificContentPageItem = (spesificItem) => {
    return spesificItem.items.map((item) => ({
      alt: item.fields.description,
      title: item.fields.title,
      img: item.fields.primaryImage.fields.file.url,
      p: item.fields.body.content[0].content[0].value,
    }));
  };
}
