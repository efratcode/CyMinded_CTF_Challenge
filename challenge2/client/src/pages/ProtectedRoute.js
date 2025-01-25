import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const userRole = localStorage.getItem('userRole');
  console.log(userRole)

  // If no session exists, redirect to the login page
  if (!userRole) {
    return <Navigate to="/login" />;
  }

  // Otherwise, render the protected page
  return children;
};

export default ProtectedRoute;
