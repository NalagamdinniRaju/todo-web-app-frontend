
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Oval } from 'react-loader-spinner';
import './todo.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await api.get('/todos');
      setTodos(response.data);
    } catch (error) {
      setError('Error fetching todos. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todo) => {
    console.log(todo);
    try {
      const response = await api.post('/todos', todo);
      setTodos([...todos, response.data]);
      console.log(response);
      toast.success('Todo added successfully');
    } catch (error) {
      console.log(error);
      setError('Error adding todo. Please try again later.');
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    console.log(id,updateTodo)
    try {
      const response = await api.put(`/todos/${id}`, updatedTodo);
      setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
      toast.success('Todo updated successfully');
    } catch (error) {
      setError('Error updating todo. Please try again later.');
    }
  };

  const deleteTodo = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
      toast.success('Todo deleted successfully');
    } catch (error) {
      setError('Error deleting todo. Please try again later.');
    }
  };

  if (loading) {
    return (
      
        <div className="loading-spinner">
          <Oval
            height="50"
            width="50"
            color="#3498db"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#3498db"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>

    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }


  return (
    <div className="todo-container">
      <TodoForm onSubmit={addTodo} />
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;