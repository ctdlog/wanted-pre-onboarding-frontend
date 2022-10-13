import { customAxios } from '../lib/customAxios';
import { alertErrorMessage } from '../util/alertErrorMessage';

export interface IUserInfo {
  email: string;
  password: string;
}

const headers = { 'Content-Type': 'application/json' };

export const signUpRequest = async (userInfo: IUserInfo) => {
  try {
    return await customAxios.post('auth/signup', userInfo, { headers });
  } catch (error) {
    alertErrorMessage(error);
  }
};

export const signInRequest = async (userInfo: IUserInfo) => {
  try {
    return await customAxios.post('auth/signin', userInfo, {
      headers,
    });
  } catch (error) {
    alertErrorMessage(error);
  }
};
