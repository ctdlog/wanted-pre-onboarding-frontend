import styled from 'styled-components';

const Button = styled.button<{ color: string }>`
  width: 100%;
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;
  background: ${(props) => props.color};
  color: white;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  user-select: none;
  transition: 0.2s all;
  border-radius: 4px;
  :disabled {
    cursor: revert;
    opacity: 0.2;
  }
`;

interface ISubmitButtonProps {
  isActive: boolean;
  value: string;
  color: string;
}

const SubmitButton = ({ isActive, value, color }: ISubmitButtonProps) => {
  return (
    <Button color={color} disabled={!isActive}>
      {value}
    </Button>
  );
};

export default SubmitButton;
