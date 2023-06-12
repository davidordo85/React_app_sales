import React from 'react';
import RegisterForm from './register_form/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../api/auth';
import LoadingSpinner from '../../shared/LoadingSpinner';
import MessageError from '../../shared/MessageAlert';

function RegisterPage() {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const resetError = () => setError(null);

  const handleSubmit = async credentials => {
    setError();
    setIsLoading(true);
    try {
      await register(credentials);
      navigate('/login');
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      {isLoading ? <LoadingSpinner /> : null}
      <div className="register-content">
        <div className="register-image"></div>
        <div className="register-form">
          <h2 className="register-form-title">Register</h2>
          {error ? (
            <MessageError message={error.message} onClick={resetError} />
          ) : null}
          <RegisterForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
