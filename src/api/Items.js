import client from './client';

const itemsBaseUrl = '/api/v1';

export const getProducts = () => {
  const url = `${itemsBaseUrl}/products`;
  return client.get(url);
};

export const getProductFilters = filters => {
  const { name, price, categories } = filters;

  const params = [];

  if (name) {
    params.push(`name=${encodeURIComponent(name)}`);
  }

  if (price === true) {
    params.push('sort=-price');
  } else if (price === false) {
    params.push('sort=price');
  }

  if (categories.length > 0) {
    const categoriesParam = categories.map(
      category => `categories=${encodeURIComponent(category)}`,
    );
    params.push(...categoriesParam);
  }

  const filterUrl = params.length > 0 ? `?${params.join('&')}` : '';

  const url = `${itemsBaseUrl}/products${filterUrl}`;
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
