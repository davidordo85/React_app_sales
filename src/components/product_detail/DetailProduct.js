import React from 'react';
import Layout from '../layout/Layout';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/Items';
import MessageError from '../shared/MessageAlert';
import ProductDetails from './ProductDetail';

const DetailPage = ({ ...props }) => {
  const [product, setProduct] = React.useState({
    name: '',
    price: '',
    quantity: '',
    images: [],
    description: '',
    categories: [],
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const resetError = () => setError(null);
  const params = useParams();

  React.useEffect(() => {
    item(params.id);
  }, [params.id]);

  const item = async id => {
    setError();
    setIsLoading(true);
    try {
      const item = await getProduct(id);
      setProduct(item.result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout {...props}>
      <div>
        <ProductDetails product={product} isLoading={isLoading} />
      </div>
      {error ? (
        <MessageError message={error.message} onClick={resetError} />
      ) : null}
    </Layout>
  );
};

export default DetailPage;
