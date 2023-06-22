import React from 'react';
import Layout from '../../layout/Layout';
import CreateProductForm from './create_product_form/CreateProductForm';
import { newProduct } from '../../../api/Items';
import { LoadingSpinner } from '../../shared';
import MessageError from '../../shared/message_alert/MessageAlert';

function CreateProduct({ ...props }) {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const resetError = () => setError(null);

  const handleSubmit = async product => {
    setError();
    setIsLoading(true);
    try {
      await newProduct(product);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Layout {...props}>
      {isLoading ? <LoadingSpinner /> : null}
      <div>
        {error ? (
          <MessageError message={error.message} onClick={resetError} />
        ) : null}
        <CreateProductForm onSubmit={handleSubmit} {...props} />
      </div>
    </Layout>
  );
}

export default CreateProduct;
