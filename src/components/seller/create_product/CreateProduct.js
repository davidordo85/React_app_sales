import React from 'react';
import Layout from '../../layout/Layout';
import CreateProductForm from './create_product_form/CreateProductForm';

function CreateProduct({ ...props }) {
  return (
    <Layout {...props}>
      <div>
        <CreateProductForm />
      </div>
    </Layout>
  );
}

export default CreateProduct;
