import React, { Suspense } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { getToken } from '../lib/token';

const PublicRoutes = () => {
  const authToken = getToken(process.env.REACT_APP_AUTH_TOKEN_NAME || 'authToken');
  const location = useLocation();
  const from = location.state?.from?.pathname || '/app';


  // if user is auth-ed goes to /app or prev page and prevents the login page
  return authToken ? (
    <Navigate to={from} replace />
  ) : (
    <Suspense fallback={<div>404</div>}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoutes;
