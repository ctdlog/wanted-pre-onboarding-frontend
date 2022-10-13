import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import TodoList from './pages/TodoList';
import GlobalStyles from './styles/globalStyles';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/todo' element={<TodoList />} />
      </Routes>
    </Router>
  );
};

export default App;
