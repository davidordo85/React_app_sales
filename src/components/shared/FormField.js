import React from 'react';

import { Form } from 'react-bootstrap';

function FormField({ label, ...props }) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...props} />
    </Form.Group>
  );
}

export default FormField;
