import './App.css';
import { Routes, Route } from 'react-router';
import {
  IndexPage,
  LoginPage,
  UserPage,
  RegisterPage,
  ModifyUser,
  NotFoundPage,
} from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/user/:id" element={<UserPage />} />
      <Route path="/modify/:id" element={<ModifyUser />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
