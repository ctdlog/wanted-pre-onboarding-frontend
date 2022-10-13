import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  button {
    margin-left: 6px;
    color: ${oc.indigo[7]};
  }
`;

interface IAuthGuideProps {
  explanation: string;
  link: string;
  handleClick: () => void;
}

const AuthGuide = ({ explanation, link, handleClick }: IAuthGuideProps) => {
  return (
    <Wrapper>
      <span>{explanation}</span>
      <button onClick={handleClick}>{link}</button>
    </Wrapper>
  );
};

export default AuthGuide;
