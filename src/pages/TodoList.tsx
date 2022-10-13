import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TodoList = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      navigate('/');
    }
  }, []);
  return <div>TodoList</div>;
};

export default TodoList;
