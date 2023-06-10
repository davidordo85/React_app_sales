import React from 'react';
import LoginForm from '../login_form/LoginForm';
import { login } from '../../../api/auth';
import './loginPage.css';

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
    <div className="login-container">
      <div className="login-content">
        <div className="login-image"></div>
        <div className="login-form">
          <h2 className="login-form-title">Log in</h2>
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
