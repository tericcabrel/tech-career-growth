import axios from 'axios';

const useHttpClient = () => {
  const instance = axios.create({
    baseURL: '/api',
  });

  instance.defaults.headers.common['Accept'] = 'application/json';
  instance.defaults.headers.common['Content-Type'] = 'application/json';
  instance.defaults.timeout = 10000;

  return instance;
};

export default useHttpClient;
