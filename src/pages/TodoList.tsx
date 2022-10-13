import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodosRequest } from '../api/todo';
import TodoContent from '../components/todo/TodoContent';
import TodoCreate from '../components/todo/TodoCreate';
import TodoHeader from '../components/todo/TodoHeader';

export interface ITodoInfo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const TodoList = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<ITodoInfo[]>([]);
  const remainingTodos = todos.filter(
    (todo) => todo.isCompleted === false
  ).length;
  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      navigate('/');
    }
    (async () => {
      const todosRequestResult = await getTodosRequest();
      setTodos(todosRequestResult?.data);
      console.log(todos);
    })();
  }, []);
  return (
    <>
      <TodoHeader count={remainingTodos} />
      <TodoContent todos={todos} setTodos={setTodos} />
      <TodoCreate setTodos={setTodos} />
    </>
  );
};

export default TodoList;
