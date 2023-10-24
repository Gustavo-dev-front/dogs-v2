import React from "react";
import useFetch from "../../hooks/useFetch";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../../api_endpoints";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [logged, setLogged] = React.useState(false);
  const [userData, setUserData] = React.useState(null);
  const { loading, error, request } = useFetch();
  const token = window.localStorage.getItem("token");

  const getUser = React.useCallback(async (token)=> {
    const { url, options } = USER_GET(token);
    const { json } = await request(url, options);
    setLogged(true);
    setUserData(json);
  }, [request]);

  const autoLogin = React.useCallback(async (token) => {
    const { url, options } = TOKEN_VALIDATE_POST(token);
    const { response } = await request(url, options);
    if (response.ok) getUser(token);
    else userLogout();
  }, [getUser, request]);

  React.useEffect(() => {
    if (token) autoLogin(token);
  }, [autoLogin, token]);

  function userLogout() {
    window.localStorage.removeItem("token");
    setLogged(false);
    setUserData(null);
  }

  async function login(username, password) {
    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value,
    });
    const { json, response } = await request(url, options);
    if (response.ok) {
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
    }
  }

  return (
    <UserContext.Provider value={{ loading, error, logged, userData, userLogout, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
