import React from 'react';

import { Form, InputGroup } from 'react-bootstrap';
import {
  FaLock,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaMoneyBillAlt,
  FaBoxes,
  FaFileAlt,
  FaImages,
} from 'react-icons/fa';

function FormField({ label, ...props }) {
  return (
    <Form.Group>
      <Form.Label className="form-label">{label}</Form.Label>
      <InputGroup>
        <InputGroup.Text>
          {/* TODO: este ternario de abajo solo tiene email name birthdate y si no el de contraseña */}
          {label === 'Email' ? (
            <FaEnvelope />
          ) : label === 'Birthdate' ? (
            <FaCalendarAlt />
          ) : label === 'Name' ? (
            <FaUser />
          ) : label === 'Price' ? (
            <FaMoneyBillAlt />
          ) : label === 'Quantity' ? (
            <FaBoxes />
          ) : label === 'Description' ? (
            <FaFileAlt />
          ) : label === 'Images' ? (
            <FaImages />
          ) : (
            <FaLock />
          )}
        </InputGroup.Text>
        <Form.Control {...props} />
      </InputGroup>
      <Form.Text className="text-muted">Enter your {label}</Form.Text>
    </Form.Group>
  );
}

export default FormField;
