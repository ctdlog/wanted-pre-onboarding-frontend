import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  return isLoginPage ? (
    <SignIn setIsLoginPage={setIsLoginPage} />
  ) : (
    <SignUp setIsLoginPage={setIsLoginPage} />
  );
};

export default Auth;
