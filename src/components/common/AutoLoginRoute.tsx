import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../../util/token';

const AutoLoginRoute = () => {
  const token = getToken();
  return token ? <Navigate to='/todo' /> : <Outlet />;
};

export default AutoLoginRoute;
