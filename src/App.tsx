import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppLayout from './components/common/AppLayout';
import Auth from './pages/Auth';
import TodoList from './pages/TodoList';
import GlobalStyles from './styles/globalStyles';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <AppLayout>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/todo' element={<TodoList />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
