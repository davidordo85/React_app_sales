import React from 'react';
import Layout from '../layout/Layout';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/Items';
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
  const params = useParams();

  React.useEffect(() => {
    item(params.id);
  }, [params.id]);

  const item = async id => {
    try {
      const item = await getProduct(id);
      setProduct(item.result);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <Layout {...props}>
      <div>
        <ProductDetails product={product} />
      </div>
    </Layout>
  );
};

export default DetailPage;
