import axios from 'axios';

const SERVER_URL = 'https://pre-onboarding-selection-task.shop/';

export const customAxios = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});
