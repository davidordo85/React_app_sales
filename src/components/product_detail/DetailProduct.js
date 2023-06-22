import React from 'react';
import Layout from '../layout/Layout';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/Items';
import { MessageAlert } from '../shared';
import ProductDetails from './ProductDetail';

// TODO: falta mejorar la visualizacion y que funcionen los botones de borrar y modificar producto
// para que aparezcan los botones tengo que comprobar la id del usuario creador del producto y del
// usuario que esta autenticado, si coinciden aparecen los botones

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
        <MessageAlert message={error.message} onClick={resetError} />
      ) : null}
    </Layout>
  );
};

export default DetailPage;
