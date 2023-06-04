import client from './client';

const itemsBaseUrl = '/api/v1';

export const getProducts = () => {
  const url = `${itemsBaseUrl}/products`;
  return client.get(url);
};
