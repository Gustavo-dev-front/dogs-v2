import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context";

const ProtectedRoute = ({ children, defaultPath }) => {
  const { logged } = React.useContext(UserContext);
  if (logged) return <>{children}</>;
  else return <Navigate to={defaultPath} />;
};

export default ProtectedRoute;
