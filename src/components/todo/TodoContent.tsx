import styled from 'styled-components';
import { ITodoInfo } from '../../pages/TodoList';
import TodoItem from './TodoItem';

const TodoContentContainer = styled.div`
  padding: 40px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

interface IProps {
  todos: ITodoInfo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodoInfo[]>>;
}

const TodoContent = ({ todos, setTodos }: IProps) => {
  return (
    <TodoContentContainer>
      <ul>
        {todos?.map((todoInfo: ITodoInfo) => (
          <TodoItem
            key={todoInfo.id}
            {...todoInfo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </TodoContentContainer>
  );
};

export default TodoContent;
