import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleStatus } from '../store/todoSlice';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <li key={id}>
        <input onChange={() => dispatch(toggleStatus(id))} type="checkbox" checked={completed} />
        <span>{title}</span>
        <span onClick={() => dispatch(deleteTodo(id))}>&times;</span>
      </li>
    </div>
  );
};

export default TodoItem;
