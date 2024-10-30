import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, fetchTodos } from './store/todoSlice';
import TodoList from './components/TodoList';
import './App.css';
import InputField from './components/InputField';

function App() {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.todos);

  const addTask = () => {
    dispatch(addNewTodo(text));
    setText('');
  };

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <InputField text={text} handleSubmit={addTask} handleInput={setText} />
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
