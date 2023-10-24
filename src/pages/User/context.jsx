import React from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [logged, setLogged] = React.useState(null);

  return (
    <UserContext.Provider value={"nothing"}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
