import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Container, Button } from "@mui/material";

function App() {
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>EventBuddy</h1>
        {!token ? (
          <Container>
            <Button color="primary" variant="contained">
              <a
                href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`}
              >
                Login to Spotify
              </a>
            </Button>
          </Container>
        ) : (
          <Navigate to="/home" replace={true} />
        )}
      </header>
    </div>
  );
}

export default App;
