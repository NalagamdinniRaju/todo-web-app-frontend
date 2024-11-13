// src/components/Auth/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../services/auth';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = auth.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/auth#/signIn" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;