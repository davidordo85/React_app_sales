import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import './notFoundPage.css';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="vh-90 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="display-4">404</h1>
          <p className="lead">Page not found</p>
          <p>Oops! The page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">
            Go back to home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
