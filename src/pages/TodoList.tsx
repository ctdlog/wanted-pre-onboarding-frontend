import { useEffect, useState } from 'react';
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
  const [todos, setTodos] = useState<ITodoInfo[]>([]);
  const remainingTodos = todos?.filter(
    (todo) => todo.isCompleted === false
  ).length;
  useEffect(() => {
    async function getAndSetTodos() {
      const todosRequestResult = await getTodosRequest();
      setTodos(todosRequestResult?.data);
    }
    getAndSetTodos();
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
