import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element, adminOnly = false }) => {
  const { currentUser, role } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && role !== 'admin') {
    return <Navigate to="/dashboard" />;
  }

  if (!adminOnly && role === 'admin') {
    return <Navigate to="/admin" />;
  }

  return element;
};

export default PrivateRoute;
