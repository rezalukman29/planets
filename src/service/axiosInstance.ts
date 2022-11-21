import axios from 'axios';

const ax = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

ax.interceptors.request.use(
  async (config: any) => {
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Access-Control-Allow-Headers'] = '*';
    return config;
  },
  (error: any) => Promise.reject(error),
);

export default ax;
