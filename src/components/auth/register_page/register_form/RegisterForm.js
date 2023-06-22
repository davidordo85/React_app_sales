import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FormField } from '../../../shared';

const RegisterForm = ({ onSubmit }) => {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
    name: '',
    birthdate: '',
  });

  // Obtener la fecha mínima permitida (hace 18 años a partir de la fecha actual)
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - 18);
  const minDate = currentDate.toISOString().split('T')[0];

  const handleChange = event => {
    setCredentials(oldCredentials => {
      const newCredentials = {
        ...oldCredentials,
        [event.target.name]: event.target.value,
      };
      return newCredentials;
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(credentials);
  };

  const { email, password, name, birthdate } = credentials;

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        type="name"
        name="name"
        label="Name"
        value={name}
        onChange={handleChange}
        required
      />
      <FormField
        type="email"
        name="email"
        label="Email"
        value={email}
        onChange={handleChange}
        required
      />
      <FormField
        type="date"
        name="birthdate"
        label="Birthdate"
        value={birthdate}
        onChange={handleChange}
        max={minDate}
        required
      />
      <FormField
        type="password"
        name="password"
        label="Password"
        value={password}
        onChange={handleChange}
        required
      />
      <div className="d-flex justify-content-center m-2">
        <Button className="w-100" variant="warning" type="submit">
          Register
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
