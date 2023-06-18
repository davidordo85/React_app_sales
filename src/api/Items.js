import client from './client';

const itemsBaseUrl = '/api/v1';

export const getProducts = () => {
  const url = `${itemsBaseUrl}/products`;
  return client.get(url);
};

export const getProduct = id => {
  const url = `${itemsBaseUrl}/products/${id}`;
  return client.get(url);
};

export const newProduct = product => {
  const url = `${itemsBaseUrl}/products/`;
  const formData = new FormData();

  // Agregar los datos del producto al formData
  for (let item in product) {
    if (item === 'images') {
      // Si es el campo de imágenes, recorrer y agregar cada archivo individualmente
      const images = product[item];
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
    } else {
      formData.append(item, product[item]);
    }
  }
  return client.post(url, formData);
};

export const getCategories = () => {
  const url = `${itemsBaseUrl}/products/categories`;
  return client.get(url);
};
