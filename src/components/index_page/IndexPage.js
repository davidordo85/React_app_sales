import React from 'react';
import Layout from '../layout/Layout';
import ListItems from '../../list_items/ListItems';

const IndexPage = (isLogged, onLogout) => {
  return (
    <Layout isLogged={isLogged}>
      <ListItems />
    </Layout>
  );
};

export default IndexPage;
