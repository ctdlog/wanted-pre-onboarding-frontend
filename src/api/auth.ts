import { alertErrorMessage } from '../util/alertErrorMessage';
import { setToken } from '../util/token';
import { instance } from './axios.config';

export interface IUserInfo {
  email: string;
  password: string;
}

export const signUpRequest = async (userInfo: IUserInfo) => {
  try {
    const result = await instance.post('auth/signup', userInfo);
    const { access_token } = result.data;
    setToken(access_token);
    return result;
  } catch (error) {
    alertErrorMessage(error, '동일한 이메일이 존재합니다.');
  }
};

export const signInRequest = async (userInfo: IUserInfo) => {
  try {
    const result = await instance.post('auth/signin', userInfo);
    const { access_token } = result.data;
    setToken(access_token);
    return result;
  } catch (error) {
    alertErrorMessage(
      error,
      '로그인에 실패했습니다. 이메일 혹은 비밀번호를 다시 확인해주세요.'
    );
  }
};
