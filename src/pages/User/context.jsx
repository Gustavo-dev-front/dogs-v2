import React from "react";
import useFetch from "../../hooks/useFetch";
import { TOKEN_POST } from "../../api_endpoints";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  async function login(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const {json, response} = await request(url, options);
    if (response.ok) {
      window.localStorage.setItem("token", json.token);
      navigate("/conta");
    }
  }

  return (
    <UserContext.Provider value={{ login, data, error, loading }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
