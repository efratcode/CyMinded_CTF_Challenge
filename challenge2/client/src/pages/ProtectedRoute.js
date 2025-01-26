import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children , requiredRole}) => {
  const userRole = localStorage.getItem("userRole");
  console.log(`Welcome! Your current role is: ${userRole}`);

  // Redirect to login if userRole is not set
  if (!userRole) {
    return <Navigate to="/login" />;
  }

  // Check if the user has the required role for the route
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/unauthorized" />; // Redirect to an unauthorized page
  }


  // Otherwise, render the protected page
  return children;
};

export default ProtectedRoute;
