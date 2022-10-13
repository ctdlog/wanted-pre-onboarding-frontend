import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      navigate('/todo');
    }
  }, []);

  return isLoginPage ? (
    <SignIn setIsLoginPage={setIsLoginPage} />
  ) : (
    <SignUp setIsLoginPage={setIsLoginPage} />
  );
};

export default Auth;
