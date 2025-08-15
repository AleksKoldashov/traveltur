import axios from 'axios';
import type { NumberOfHotelsRequest } from './types';

const apiClient = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = import.meta.env.VITE_API_TOKEN;
    if (token) {
      if (!config.params) {
        config.params = {};
      }
      config.params['token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default {
  hotels: {
    number_of_hotels(request: NumberOfHotelsRequest) {
      return apiClient.get(
        'http://engine.hotellook.com/api/v2/static/hotels.json',
        { params: request }
      );
    },
  },
};
