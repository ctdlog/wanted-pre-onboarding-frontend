import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppLayout from './components/common/AppLayout';
import AutoLoginRoute from './components/common/AutoLoginRoute';
import PrivateRoute from './components/common/PrivateRoute';
import Auth from './pages/Auth';
import TodoList from './pages/TodoList';
import GlobalStyles from './styles/globalStyles';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <AppLayout>
        <Routes>
          <Route element={<AutoLoginRoute />}>
            <Route path='/' element={<Auth />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/todo' element={<TodoList />} />
          </Route>
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
