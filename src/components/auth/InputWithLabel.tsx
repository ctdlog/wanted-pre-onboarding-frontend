import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  & + & {
    margin-top: 22px;
  }
`;

const Label = styled.div`
  font-size: 22px;
  color: ${oc.gray[6]};
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${oc.gray[3]};
  line-height: 2.5rem;
  font-size: 16px;
  padding: 4px 16px;
`;

interface IInputWithLabelProps {
  required?: boolean;
  label: string;
  placeholder?: string;
  value: string;
  type: string;
  autoComplete?: string;
  minLength?: number;
  pattern?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel = ({ label, ...rest }: IInputWithLabelProps) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input {...rest} />
    </Wrapper>
  );
};

export default InputWithLabel;
