

import React, { useState } from 'react';
import {
  FaClipboardList,
  FaRegClock,
} from 'react-icons/fa';
import './todo.css';

const TodoForm = ({ onSubmit, initialData, isLoading }) => {
  const [todo, setTodo] = useState(initialData || {
    todo: '',
    status: 'pending'
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!todo.todo.trim()) {
      newErrors.todo = 'Todo is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(todo);
      if (!initialData) {
        setTodo({ todo: '', status: 'pending' });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="todo-form-container">
      <form onSubmit={handleSubmit} id="todo-form">
        <div className={`form-group ${errors.todo ? 'error' : ''}`}>
          <label htmlFor="todo">
            <FaClipboardList className="input-icon" /> Todo
          </label>
          <input
            id="todo-form-input"
            type="text"
            color='todo-form-input'
            name="todo"
            placeholder="Enter your todo"
            value={todo.todo}
            onChange={handleChange}
          />
          {errors.todo && <span className="error-message">{errors.todo}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="status">
            <FaRegClock className="input-icon" /> Status
          </label>
          <select
            id="status"
            name="status"
            value={todo.status}
            onChange={handleChange}
          >
            <option value="pending">🕒 Pending</option>
            <option value="in-progress">⏳ In Progress</option>
            <option value="completed">✅ Completed</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          id='todo-form-button'
          className={`${todo.status}`}
        >
                Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;