import React from "react";
import useFetch from "../../hooks/useFetch";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../../api_endpoints";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  const getUser = React.useCallback( async (token) => {
      const { url, options } = USER_GET(token);
      request(url, options);
      navigate("/conta");
    },[request, navigate]);

  async function login(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const { json, response } = await request(url, options);
    if (response.ok) {
      window.localStorage.setItem("token", json.token);
      navigate("/conta");
    }
  }

  React.useEffect(() => {
    if (token) getUser(token);
  }, [getUser, token]);

  return (
    <UserContext.Provider value={{ login, data, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
