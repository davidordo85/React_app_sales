import React from 'react';
import Layout from '../layout/Layout';
import { getProducts } from '../../api/Items';
import MessageError from '../shared/MessageAlert';
import ProductsList from '../../list_items/ProductsList';

const IndexPage = isLogged => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const resetError = () => setError(null);

  React.useEffect(() => {
    items();
  }, []);

  const items = async () => {
    setError();
    setIsLoading(true);
    try {
      const items = await getProducts();
      setProducts(items.result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Layout isLogged={isLogged}>
      <div className="container">
        <div>
          <ProductsList products={products} isLoading={isLoading} />
        </div>
        {error ? (
          <MessageError message={error.message} onClick={resetError} />
        ) : null}
      </div>
    </Layout>
  );
};

export default IndexPage;
