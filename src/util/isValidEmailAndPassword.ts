import { IUserInfo } from '../api/auth';

export const isValidEmailAndPassword = ({ email, password }: IUserInfo) =>
  email.includes('@') && password.length > 8;
