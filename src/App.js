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

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<IndexPage isLogged={isLogged} onLogout={handleLogout} />}
      />
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/contact"
        element={<ContactPage isLogged={isLogged} onLogout={handleLogout} />}
      />
      <Route
        path="/createProduct"
        element={<CreateProduct isLogged={isLogged} onLogout={handleLogout} />}
      />
      <Route
        path="/detail/:id"
        element={<DetailPage isLogged={isLogged} onLogout={handleLogout} />}
      />
      <Route
        path="/user/:id"
        element={<UserPage isLogged={isLogged} onLogout={handleLogout} />}
      />
      <Route
        path="/modify/:id"
        element={<ModifyUser isLogged={isLogged} onLogout={handleLogout} />}
      />
      <Route
        path="/myProducts/:id"
        element={<MyProducts isLogged={isLogged} onLogout={handleLogout} />}
      />
      <Route
        path="/modifyProduct/:id"
        element={<ModifyProduct isLogged={isLogged} onLogout={handleLogout} />}
      />
      <Route
        path="*"
        element={<NotFoundPage isLogged={isLogged} onLogout={handleLogout} />}
      />
    </Routes>
  );
}

export default App;
