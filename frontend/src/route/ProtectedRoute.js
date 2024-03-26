

// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, isAdmin }) => {
  const { isAuthenticated, loading, user } = useAuth();


  if (!isAuthenticated ) {
    return <Navigate to="/admin/dashboard" />;
  }

  if (isAuthenticated) {
    if (isAdmin && user.role !== 'admin') {
      return <Navigate to="/" />;
    }
    return children;
  }

  return null; // Handle the loading state if needed
};

export default ProtectedRoute;




