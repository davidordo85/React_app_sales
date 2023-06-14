import React from 'react';
import Layout from '../../layout/Layout';

function MyProducts({ ...props }) {
  return (
    <Layout {...props}>
      <div>MyProducts</div>
    </Layout>
  );
}

export default MyProducts;
