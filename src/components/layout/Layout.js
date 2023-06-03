import React from 'react';
import Header from './Header';

function Layout({ children, ...props }) {
  return (
    <div className="layout">
      <Header className="" {...props} />
      <main className="">
        <section className="">{children}</section>
      </main>
      {/* TODO: place your footer company */}
      <footer>© 2023 React Page buy and sell</footer>
    </div>
  );
}

export default Layout;
