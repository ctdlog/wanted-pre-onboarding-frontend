import { AuthForm } from '../components/auth/AuthForm';
import { useInput } from '../hooks/useInput';
import AuthGuide from '../components/auth/AuthGuide';
import InputWithLabel from '../components/auth/InputWithLabel';
import SubmitButton from '../components/auth/SubmitButton';
import oc from 'open-color';
import { signInRequest } from '../api/auth';
import { isValidEmailAndPassword } from '../util/isValidEmailAndPassword';
import { useNavigate } from 'react-router-dom';

interface IProps {
  setIsLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn = ({ setIsLoginPage }: IProps) => {
  const [email, handleChangeEmail] = useInput('');
  const [password, handleChangePassword] = useInput('');
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await signInRequest({ email, password });
    if (result) {
      navigate('/todo');
      localStorage.setItem('access_token', result?.data.access_token);
    }
  };
  const moveSignupPage = () => {
    setIsLoginPage(false);
  };
  const isActive = isValidEmailAndPassword({ email, password });
  return (
    <>
      <AuthForm onSubmit={handleSubmit}>
        <InputWithLabel
          required
          label='Email'
          placeholder='이메일을 입력해주세요.'
          value={email}
          type='email'
          autoComplete='username'
          onChange={handleChangeEmail}
        />
        <InputWithLabel
          required
          label='Password'
          placeholder='비밀번호를 입력해주세요.'
          value={password}
          type='password'
          autoComplete='current-password'
          minLength={8}
          onChange={handleChangePassword}
        />
        <SubmitButton value='로그인' color={oc.teal[7]} isActive={isActive} />
      </AuthForm>
      <AuthGuide
        explanation='유저가 아니신가요?'
        link='회원가입'
        handleClick={moveSignupPage}
      />
    </>
  );
};

export default SignIn;
