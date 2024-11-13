
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import LoginRegister from './components/Auth/LoginRegister';
import TodoList from './components/Todo/TodoList';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className='app'>
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/auth" element={<LoginRegister />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <TodoList />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
    </div>
  );
};

export default App;