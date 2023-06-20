import React from 'react';
import Header from './Header';
import Filter from '../form_search/Filter';
import Footer from './Footer';

function Layout({ children, tags, handleFilterSubmit, ...props }) {
  return (
    <div className="layout">
      <Header {...props} />
      <div className="mb-5">
        <Filter tags={tags} onSubmit={handleFilterSubmit} />
      </div>
      <main className="mb-5">
        <section className="">{children}</section>
      </main>
      {/* TODO: place your footer company */}
      <Footer />
    </div>
  );
}

export default Layout;
