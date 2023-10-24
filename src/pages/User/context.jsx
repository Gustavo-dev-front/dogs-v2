import React from "react";
import useFetch from "../../hooks/useFetch";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../../api_endpoints";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  const getUser = React.useCallback(
    async (token) => {
      const { url, options } = USER_GET(token);
      const { json } = await request(url, options);
      setUser(json);
      window.localStorage.setItem("token", token);
      navigate("/conta");
    },[navigate, request]);

  const autoLogin = React.useCallback(
    async (token) => {
      const { url, options } = TOKEN_VALIDATE_POST(token);
      const { response } = await request(url, options);
      if (response.ok) getUser(token);
    },[request, getUser]);

  async function login(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const { json, response } = await request(url, options);
    if (response.ok) getUser(json.token);
  }

  React.useEffect(() => {
    if (token) autoLogin(token);
  }, [autoLogin, token]);

  return (
    <UserContext.Provider value={{ login, user, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
