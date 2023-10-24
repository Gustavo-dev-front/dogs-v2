import React from "react";
import useFetch from "../../hooks/useFetch";
import { TOKEN_POST, USER_GET } from "../../api_endpoints";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [logged, setLogged] = React.useState(false);
  const [userData, setUserData] = React.useState(null);
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setLogged(true);
      setUserData(json);
      navigate("/conta");
    }
  }

  async function login(username, password) {
    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value,
    });
    const { json, response } = await request(url, options);
    if (response.ok) getUser(json.token);
  }

  return (
    <UserContext.Provider value={{ loading, error, logged, userData, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
