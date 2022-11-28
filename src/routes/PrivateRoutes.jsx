import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Bootstrap from './Bootstrap';
import { getToken } from '../lib/token';

const RequireAuth = () => {
  const authToken = getToken(process.env.REACT_APP_AUTH_TOKEN_NAME || 'authToken');
  const location = useLocation();

  return authToken ? (
    <Bootstrap />
  ) : (
     <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;
