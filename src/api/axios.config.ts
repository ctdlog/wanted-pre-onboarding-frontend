import axios, { AxiosInstance } from 'axios';
import { getToken } from '../util/token';

export const instance: AxiosInstance = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
});

instance.interceptors.request.use((request) => {
  if (request.headers) {
    request.headers.authorization = `Bearer ${getToken()}`;
  }
  return request;
});
