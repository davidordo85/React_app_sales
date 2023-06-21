import React from 'react';

const NoResultsMessage = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <p>Sorry, no products found with the specified search parameters.</p>
      <p>Please try again with different search criteria.</p>
    </div>
  );
};

export default NoResultsMessage;
