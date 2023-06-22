import React from 'react';

import { Alert } from 'react-bootstrap';

function MessageError({ message }) {
  return (
    <Alert variant="danger" dismissible>
      <Alert.Heading>Error</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
}

export default MessageError;
