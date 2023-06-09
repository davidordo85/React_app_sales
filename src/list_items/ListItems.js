import React from 'react';

import { getProducts } from '../api/Items';

const ListItems = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    items();
  }, []);

  const items = async () => {
    try {
      const items = await getProducts();
      setProducts(items.result);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('ok');
    }
  };

  return (
    <div>
      <div>{JSON.stringify(products)}</div>
    </div>
  );
};

export default ListItems;
