import axios from 'axios';
import { alertErrorMessage } from '../util/alertErrorMessage';

axios.defaults.baseURL = 'https://pre-onboarding-selection-task.shop/';

export interface IUserInfo {
  email: string;
  password: string;
}

const headers = { 'Content-Type': 'application/json' };

export const signUpRequest = async (userInfo: IUserInfo) => {
  try {
    return await axios.post('auth/signup', userInfo, { headers });
  } catch (error) {
    alertErrorMessage(error);
  }
};

export const signInRequest = async (userInfo: IUserInfo) => {
  try {
    return await axios.post('auth/signin', userInfo, {
      headers,
    });
  } catch (error) {
    alertErrorMessage(error);
  }
};
