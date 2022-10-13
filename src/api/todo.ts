import { customAxios } from '../lib/customAxios';

const headers = { 'Content-Type': 'application/json' };

export const getTodosRequest = async () => {
  try {
    return await customAxios.get('todos', { headers });
  } catch (error) {
    console.error(error);
  }
};

export const createTodoRequest = async (newTodo: string) => {
  try {
    return await customAxios.post('todos', { todo: newTodo }, { headers });
  } catch (error) {
    console.error(error);
  }
};

export const updateTodoRequest = async ({
  id,
  todo,
  isCompleted,
}: {
  id: number;
  todo: string;
  isCompleted: boolean;
}) => {
  try {
    return await customAxios.put(
      `todos/${id}`,
      { todo, isCompleted },
      { headers }
    );
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodoRequest = async (id: number) => {
  try {
    return await customAxios.delete(`todos/${id}`, { headers });
  } catch (error) {
    console.error(error);
  }
};
