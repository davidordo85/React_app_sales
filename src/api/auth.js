import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

const authBaseUrl = '/api/v1/user';

export const login = credentials => {
  return client.post(`${authBaseUrl}/login`, credentials).then(({ token }) => {
    configureClient({ token });
    storage.set('auth', token);
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    resetClient();
    storage.remove('auth');
  });
};
