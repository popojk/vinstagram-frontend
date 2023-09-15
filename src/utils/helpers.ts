import axios, { isAxiosError } from 'axios';

const baseURL = 'http://vinstagram.ap-northeast-2.elasticbeanstalk.com/api';

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem('user');
    if (user) {
      const { access_token } = JSON.parse(user);
      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const apiHelper = instance;

export default apiHelper;
export { isAxiosError };