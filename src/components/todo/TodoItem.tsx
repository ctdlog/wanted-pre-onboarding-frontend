import styled, { css } from 'styled-components';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';
import { deleteTodoRequest, updateTodoRequest } from '../../api/todo';
import { ITodoInfo } from '../../pages/TodoList';
import { MdDone, MdOutlineCancel } from 'react-icons/md';
import { BsCheck2Circle } from 'react-icons/bs';
import { useState } from 'react';
import oc from 'open-color';
import { useInput } from '../../hooks/useInput';

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  margin-left: auto;
  cursor: pointer;
  display: none;
  .icon {
    margin: 0 6px;
  }
  .hover {
    &:hover {
      color: #ff6b6b;
    }
  }
`;

const DisplayIcons = styled(Icons)`
  display: block;
  margin-right: auto;
  .edit_icon {
    color: ${oc.green[7]};
  }
  .cancel_icon {
    color: ${oc.pink[7]};
  }
`;

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  &:hover {
    ${Icons} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.button<{ isCompleted: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  ${(props) =>
    props.isCompleted &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Input = styled.input`
  width: 60%;
  padding: 12px 8px;
  border-radius: 8px;
  border: 1px solid ${oc.gray[2]};
`;

const Text = styled.div<{ isCompleted: boolean }>`
  flex: 1;
  font-size: 18px;
  color: #495057;
  ${(props) =>
    props.isCompleted &&
    css`
      color: #ced4da;
    `}
`;

interface IProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  todos: ITodoInfo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodoInfo[]>>;
}

const TodoItem = ({ id, todo, isCompleted, todos, setTodos }: IProps) => {
  const [newText, handleChangeNewText, setNewText] = useInput(todo);
  const [isEdit, setIsEdit] = useState(false);
  const handleChecked = async () => {
    const result = await updateTodoRequest({
      id,
      todo,
      isCompleted: !isCompleted,
    });
    if (result) {
      const newTodos = todos.map((todo) => ({
        ...todo,
        isCompleted: todo.id === id ? !isCompleted : todo.isCompleted,
      }));
      setTodos(newTodos);
    }
  };
  const handleEdit = async () => {
    setIsEdit(true);
    const result = await updateTodoRequest({
      id,
      todo: newText,
      isCompleted,
    });
    if (result) {
      const newTodos = todos.map((todo) => ({
        ...todo,
        todo: todo.id === id ? newText : todo.todo,
      }));
      setTodos(newTodos);
      setIsEdit(false);
    }
  };
  const handleCancelEdit = () => {
    setIsEdit(false);
  };
  const handleDelete = async () => {
    const result = await deleteTodoRequest(id);
    if (result) {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    }
  };
  return (
    <TodoItemWrapper>
      {isEdit ? (
        <>
          <Input required value={newText} onChange={handleChangeNewText} />
          <DisplayIcons>
            <BsCheck2Circle className='icon edit_icon' onClick={handleEdit} />
            <MdOutlineCancel
              className='icon cancel_icon'
              onClick={handleCancelEdit}
            />
          </DisplayIcons>
        </>
      ) : (
        <>
          <CheckCircle isCompleted={isCompleted} onClick={handleChecked}>
            {isCompleted && <MdDone />}
          </CheckCircle>
          <Text isCompleted={isCompleted}>{todo}</Text>
          <Icons>
            <FiEdit2 className='icon hover' onClick={() => setIsEdit(true)} />
            <MdOutlineDeleteOutline
              className='icon hover'
              onClick={handleDelete}
            />
          </Icons>
        </>
      )}
    </TodoItemWrapper>
  );
};

export default TodoItem;
