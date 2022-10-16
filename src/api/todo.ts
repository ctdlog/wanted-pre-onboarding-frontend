import { alertErrorMessage } from '../util/alertErrorMessage';
import { instance } from './axios.config';

const headers = { 'Content-Type': 'application/json' };

export const getTodosRequest = async () => {
  try {
    return await instance.get('todos');
  } catch (error) {
    alertErrorMessage(error, '요청에 실패했습니다.');
  }
};

export const createTodoRequest = async (newTodo: string) => {
  try {
    return await instance.post('todos', { todo: newTodo }, { headers });
  } catch (error) {
    alertErrorMessage(
      error,
      '정상적으로 생성되지 않았습니다. 다시 시도해주세요.'
    );
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
    return await instance.put(
      `todos/${id}`,
      { todo, isCompleted },
      { headers }
    );
  } catch (error) {
    alertErrorMessage(
      error,
      '정상적으로 수정되지 않았습니다. 다시 시도해주세요.'
    );
  }
};

export const deleteTodoRequest = async (id: number) => {
  try {
    return await instance.delete(`todos/${id}`);
  } catch (error) {
    alertErrorMessage(
      error,
      '정상적으로 삭제되지 않았습니다. 다시 시도해주세요.'
    );
  }
};
