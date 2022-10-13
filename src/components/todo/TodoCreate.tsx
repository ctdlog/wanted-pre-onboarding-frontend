import styled from 'styled-components';
import oc from 'open-color';
import { useInput } from '../../hooks/useInput';
import { createTodoRequest } from '../../api/todo';
import { ITodoInfo } from '../../pages/TodoList';

const TodoCreateContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding-top: 36px;
  padding-bottom: 42px;
  background-color: ${oc.gray[2]};
  border-radius: 0px 0px 16px 16px;
`;

const TodoInput = styled.input`
  width: 70%;
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid ${oc.gray[4]};
`;

interface IProps {
  setTodos: React.Dispatch<React.SetStateAction<ITodoInfo[]>>;
}

const TodoCreate = ({ setTodos }: IProps) => {
  const [newTodo, handleChangeNewTodo, setNewTodo] = useInput('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await createTodoRequest(newTodo);
    if (result) {
      setNewTodo('');
      setTodos((prevTodos) => [...prevTodos, result.data]);
    }
  };
  return (
    <TodoCreateContainer onSubmit={handleSubmit}>
      <TodoInput
        placeholder='오늘의 할 일을 입력하고, Enter를 누르세요.'
        value={newTodo}
        onChange={handleChangeNewTodo}
      />
    </TodoCreateContainer>
  );
};

export default TodoCreate;
