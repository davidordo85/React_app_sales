import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../login_form/LoginForm';
import { login } from '../../../api/auth';
import MessageError from '../../shared/MessageAlert';
import LoadingSpinner from '../../shared/LoadingSpinner';

function LoginPage({ onLogin, whatUser }) {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const resetError = () => setError(null);

  const handleSubmit = async credentials => {
    setError();
    setIsLoading(true);
    try {
      await login(credentials);
      onLogin();
      whatUser();
      navigate('/');
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      {isLoading ? <LoadingSpinner /> : null}
      <div className="login-content">
        <div className="login-image"></div>
        <div className="login-form">
          <h2 className="login-form-title">Log in</h2>
          {error ? (
            <MessageError message={error.message} onClick={resetError} />
          ) : null}
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
