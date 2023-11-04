import React from "react";
import { UserContext } from "./context";

const ProtectedRoute = ({ children }) => {
  const { logged } = React.useContext(UserContext);
  if (logged) return <>{children}</>;
  else return null;
};

export default ProtectedRoute;
