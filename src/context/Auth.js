import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Create AuthContext
export const AuthContext = createContext();

axios.defaults.baseURL = "http://localhost:9000/api";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const res = error.response;
    if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
      const auth = JSON.parse(localStorage.getItem("auth") || "{}");
      if (auth.token) {
        localStorage.removeItem("auth");
        const history = useNavigate();
        history.push("/login");
        console.log("LOGOUT FORCEFULLY");
      }
    }
  }
);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    let data = localStorage.getItem("auth");
    if (data) {
      setAuth(JSON.parse(data));
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
