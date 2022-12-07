import { useState } from "react";

const useToken = () => {
 
 
 
    const getToken = () => {
    const getstring = localStorage.getItem("token");
    const userToken = JSON.parse(getstring);

    return userToken?.username;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));

    setToken(userToken.username);
  };

  return {
   setToken: saveToken,
    token,
  };
};

export default useToken;
