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

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(credentials);
  };

  const { email, password, remember } = credentials;

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        type="email"
        name="email"
        label="Email"
        value={email}
        onChange={handleChange}
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
      <Form.Group
        className="mb-3 d-flex align-items-center justify-content-center"
        controlId="formBasicCheckbox"
      >
        <Form.Check
          name="remember"
          type="checkbox"
          label="Remember Password"
          onChange={handleChange}
          value={remember}
          id="custom-checkbox"
          className="form-switch"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Log in
      </Button>
    </Form>
  );
};

export default LoginForm;
