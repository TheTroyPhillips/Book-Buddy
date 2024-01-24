import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, isLoggedIn }) => {
  return isLoggedIn ? (
    <Route element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;