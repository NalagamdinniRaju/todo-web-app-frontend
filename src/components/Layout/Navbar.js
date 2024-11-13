
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import auth from '../../services/auth';
import "./Navbar.css"
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    completed: 0
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchTodoStats();
  }, [stats]);

  const fetchTodoStats = async () => {
    try {
      const todos = await api.get('/todos');
      const todoStats = todos.data.reduce((acc, todo) => {
        acc.total++;
        acc[todo.status.replace(' ', '')]++;
        return acc;
      }, {
        total: 0,
        pending: 0,
        inProgress: 0,
        completed: 0
      });
      setStats(todoStats);
    } catch (error) {
      console.error('Error fetching todo stats:', error);
    }
  };

  const handleLogout = () => {
    auth.logout();
    navigate('/auth#/signIn');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Todo Tasks</Link>
        </div>
        <div className="navbar-stats">
          <button 
            className="stats-button"
            onClick={() => setIsSidebarOpen(true)}
          >
            Tasks: {stats.total}
            <span className="stats-indicator">
              <span className="dot pending"></span>
              <span className="dot in-progress"></span>
              <span className="dot completed"></span>
            </span>
          </button>
        </div>
        <div className="navbar-menu">
          <Link to="/">Todos</Link>
          <Link to="/profile">
            <div className="nav-profile-photo">
              <FaUser className="nav-default-avatar" />
            </div>
          </Link>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} 
           onClick={() => setIsSidebarOpen(false)}>
        <div className="sidebar" onClick={e => e.stopPropagation()}>
          <div className="sidebar-header">
            <h3>Task Statistics</h3>
            <button 
              className="close-button"
              onClick={() => setIsSidebarOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="sidebar-content">
            <div className="stat-item total">
              <div className="stat-label">Total Tasks</div>
              <div className="stat-value">{stats.total}</div>
            </div>
            <div className="stat-item pending">
              <div className="stat-label">Pending</div>
              <div className="stat-value">{stats.pending}</div>
            </div>
            <div className="stat-item in-progress">
              <div className="stat-label">In Progress</div>
              <div className="stat-value">{stats.inProgress}</div>
            </div>
            <div className="stat-item completed">
              <div className="stat-label">Completed</div>
              <div className="stat-value">{stats.completed}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;