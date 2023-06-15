import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, ...props }) {
  return (
    <div className="layout">
      <Header className="" {...props} />
      <main className="mb-5">
        <section className="">{children}</section>
      </main>
      {/* TODO: place your footer company */}
      <Footer />
    </div>
  );
}

export default Layout;
