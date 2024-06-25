import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ children, ...rest }) => {
  function getToken() {
    return localStorage.getItem('token');
  }

  const token = getToken();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
