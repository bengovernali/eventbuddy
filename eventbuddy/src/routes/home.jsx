import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  const logout = () => {
    window.localStorage.removeItem("token");
    setToken("");
    navigate("/")
  };

  return (
    <>
      <div>Welcome Home!</div>
      <button onClick={logout}>Logout</button>
    </>
  );
}
