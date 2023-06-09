import React from 'react';
import LoginForm from '../login_form/LoginForm';
import { login } from '../../../api/auth';

// TODO: mejorar el handleSubmit
function LoginPage() {
  const handleSubmit = async credentials => {
    try {
      await login(credentials);
      console.log('ok');
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default LoginPage;
