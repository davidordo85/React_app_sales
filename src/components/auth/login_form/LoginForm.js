import React from 'react';
import { Form, Button } from 'react-bootstrap';
import FormField from '../../shared/FormField';

const LoginForm = ({ onSubmit }) => {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = event => {
    setCredentials(oldCredentials => {
      const newCredentials = {
        ...oldCredentials,
        [event.target.name]: event.target.value,
        remember: event.target.checked,
      };
      return newCredentials;
    });
  };

  const { email, password, remember } = credentials;
  console.log(credentials);

  return (
    <Form>
      <FormField
        type="email"
        name="email"
        label="Email"
        value={email}
        onChange={handleChange}
      />
      <FormField
        type="password"
        name="password"
        label="Password"
        value={password}
        onChange={handleChange}
      />

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          name="remember"
          type="checkbox"
          label="Remember Password"
          onChange={handleChange}
          value={remember}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Log in
      </Button>
    </Form>
  );
};

export default LoginForm;
