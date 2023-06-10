import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import storage from './utils/storage';
import { configureClient } from './api/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const accessToken = storage.get('auth');
configureClient({ accessToken });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App isInitiallyLogged={!!accessToken} />
    </React.StrictMode>
  </Router>,
);
