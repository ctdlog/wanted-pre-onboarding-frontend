import { signUpRequest } from '../api/auth';
import { useInput } from '../hooks/useInput';
import { AuthForm } from '../components/auth/AuthForm';
import AuthGuide from '../components/auth/AuthGuide';
import InputWithLabel from '../components/auth/InputWithLabel';
import SubmitButton from '../components/auth/SubmitButton';
import oc from 'open-color';
import { isValidEmailAndPassword } from '../util/isValidEmailAndPassword';

interface IProps {
  setIsLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp = ({ setIsLoginPage }: IProps) => {
  const [email, handleChangeEmail] = useInput('');
  const [password, handleChangePassword] = useInput('');
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await signUpRequest({ email, password });
    localStorage.setItem('access_token', result?.data.access_token);
  };
  const moveLoginPage = () => {
    setIsLoginPage(true);
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
        <SubmitButton
          value='회원가입'
          color={oc.yellow[7]}
          isActive={isActive}
        />
      </AuthForm>
      <AuthGuide
        explanation='회원가입 하신 적이 있나요?'
        link='로그인'
        handleClick={moveLoginPage}
      />
    </>
  );
};

export default SignUp;
