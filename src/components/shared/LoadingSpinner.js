import React from 'react';
import { Spinner } from 'react-bootstrap';

function LoadingSpinner() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '9999',
      }}
    >
      <Spinner
        animation="border"
        variant="warning"
        style={{ width: '4rem', height: '4rem' }}
      />
    </div>
  );
}

export default LoadingSpinner;
