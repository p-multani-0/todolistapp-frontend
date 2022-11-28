import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Home = lazy(() => import("../pages/Home"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Navigate to="/sign-in" />} />;
        <Route path="/sign-in" element={<SignIn />} />;
        <Route path="/sign-up" element={<SignUp />} />;
      </Route>
      <Route path="/app" element={<PrivateRoutes />}>
        <Route index element={<Home />} />;
      </Route>
    </Routes>
  );
};

export default AppRoutes;
