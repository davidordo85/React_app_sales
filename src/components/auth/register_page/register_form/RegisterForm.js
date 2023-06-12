import React from 'react';
import { Form, Button } from 'react-bootstrap';
import FormField from '../../../shared/FormField';

const RegisterForm = () => {
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

  console.log(credentials);

  const { email, password, name, birthdate } = credentials;

  return (
    <Form>
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
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
