import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import {
  IndexPage,
  LoginPage,
  UserPage,
  RegisterPage,
  ModifyUser,
  NotFoundPage,
  ModifyProduct,
  ContactPage,
  CreateProduct,
  DetailPage,
  MyProducts,
} from './components';
import { getUser, logout } from './api/auth';
import storage from './utils/storage';
import { configureClient } from './api/client';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  const [user, setUser] = React.useState({});

  const handleLogin = () => {
    const accessToken = storage.get('auth');
    if (accessToken) {
      configureClient({ accessToken });
      setIsLogged(true);
      whatUser();
    }
  };

  const whatUser = React.useCallback(async () => {
    try {
      const user = await getUser();
      setUser(user);
    } catch (error) {
      logout().then(handleLogout);
    }
  }, []);

  React.useEffect(() => {
    if (isLogged) {
      whatUser();
    }
  }, [isLogged, whatUser]);

  const handleLogout = () => setIsLogged(false);

  console.log(user);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <IndexPage isLogged={isLogged} user={user} onLogout={handleLogout} />
        }
      />
      <Route
        path="/login"
        element={<LoginPage onLogin={handleLogin} whatUser={whatUser} />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/contact"
        element={
          <ContactPage
            isLogged={isLogged}
            user={user}
            onLogout={handleLogout}
          />
        }
      />
      <Route
        path="/createProduct"
        element={
          <CreateProduct
            isLogged={isLogged}
            user={user}
            onLogout={handleLogout}
          />
        }
      />
      <Route
        path="/detail/:id"
        element={
          <DetailPage isLogged={isLogged} user={user} onLogout={handleLogout} />
        }
      />
      <Route
        path="/user/:id"
        element={
          <UserPage isLogged={isLogged} user={user} onLogout={handleLogout} />
        }
      />
      <Route
        path="/modify/:id"
        element={
          <ModifyUser isLogged={isLogged} user={user} onLogout={handleLogout} />
        }
      />
      <Route
        path="/myProducts/:id"
        element={
          <MyProducts isLogged={isLogged} user={user} onLogout={handleLogout} />
        }
      />
      <Route
        path="/modifyProduct/:id"
        element={
          <ModifyProduct
            isLogged={isLogged}
            user={user}
            onLogout={handleLogout}
          />
        }
      />
      <Route
        path="*"
        element={
          <NotFoundPage
            isLogged={isLogged}
            user={user}
            onLogout={handleLogout}
          />
        }
      />
    </Routes>
  );
}

export default App;
