import React from 'react';

import { Form, InputGroup } from 'react-bootstrap';
import { FiMail } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa';

function FormField({ label, ...props }) {
  return (
    <Form.Group>
      <Form.Label className="form-label">{label}</Form.Label>
      <InputGroup>
        <InputGroup.Text>
          {/* TODO: este ternario de abajo es solo para form de email o password, hay que cambiarlo para otro tipo de form */}
          {label !== 'Email' ? <FaLock /> : <FiMail />}
        </InputGroup.Text>
        <Form.Control {...props} />
      </InputGroup>
      <Form.Text className="text-muted">Enter your {label}</Form.Text>
    </Form.Group>
  );
}

export default FormField;
