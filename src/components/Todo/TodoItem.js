
import React, { useState } from 'react';
import { FaEdit, FaCheck, FaTrashAlt } from 'react-icons/fa';
import './todo.css';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleUpdate = () => {
    onUpdate(todo._id, editedTodo);
    setIsEditing(false);
  };

  const handleStatusChange = (e) => {
    setEditedTodo({ ...editedTodo, status: e.target.value });
  };

  const handleTitleChange = (e) => {
    setEditedTodo({ ...editedTodo, title: e.target.value });
  };

  return (
    <div className={`todo-item status-${todo.status}`}>
      {isEditing ? (
        <div className="todo-edit-container">
          <input
            type="text"
            name="title"
            value={editedTodo.title}
            onChange={handleTitleChange}
          />
          <div className="status-container">
            <select
              id="status"
              name="status"
              value={editedTodo.status}
              onChange={handleStatusChange}
            >
              <option value="pending">🕒 Pending</option>
              <option value="in-progress">⏳ In Progress</option>
              <option value="completed">✅ Completed</option>
            </select>
            {/* <span className="status">{editedTodo.status}</span> */}
          </div>
          <div className="todo-actions">
            <button onClick={handleUpdate}>
              <FaCheck />
            </button>
            <button onClick={() => setIsEditing(false)}>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ) : (
        <div className="todo-content">
          <h3>{todo.title}</h3>
          <div className="status-container">
            <span className="status">{todo.status}</span>
          </div>
        </div>
      )}
      <div className="todo-actions">
        <button onClick={() => setIsEditing(true)}>
          <FaEdit />
        </button>
        <button className='delete-btn' onClick={() => onDelete(todo._id)}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;