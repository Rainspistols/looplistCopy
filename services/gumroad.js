import fetch from 'isomorphic-unfetch';

export default class GumroadService {
  Token = process.env.NEXT_PUBLIC_GUMROAD_ACCESS_TOKEN;
  _apiBase = 'https://api.gumroad.com/v2';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      withCredentials: true,
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${this.Token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getGumroadAllProducts = async () => {
    return await this.getResource('/products');
  };
}
