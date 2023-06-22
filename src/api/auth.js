import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';
const authBaseUrl = '/api/v1/user';

export const login = credentials => {
  return client.post(`${authBaseUrl}/login`, credentials).then(({ token }) => {
    if (credentials.remember) {
      storage.remember('auth', token);
    } else {
      storage.set('auth', token);
    }
    configureClient({ token });
  });
};

export const register = credentials => {
  return client.post(`${authBaseUrl}/register`, credentials);
};

export const getUser = () => {
  return client.get(`${authBaseUrl}/getUser`);
};

export const getMe = id => {
  return client.get(`${authBaseUrl}/${id}`);
};

export const logout = () => {
  return Promise.resolve().then(() => {
    resetClient();
    storage.remove('auth');
  });
};
