import React from 'react';
import RegisterForm from './register_form/RegisterForm';

function RegisterPage() {
  return (
    <div className="register-container">
      {/*TODO: aqui ira el spinner*/}
      <div className="register-content">
        <div className="register-image"></div>
        <div className="register-form">
          <h2 className="register-form-title">Register</h2>
          {/*Aqui ira el message de error */}
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
