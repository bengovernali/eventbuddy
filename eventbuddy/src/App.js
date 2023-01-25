import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import Header from "./components/headers";

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
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Header />
      {!token ? (
        <Button color="primary" variant="contained">
          <a
            href={
              //"https://accounts.spotify.com/authorize?client_id=638f3d8085194625869dd89ac86eac6e&redirect_uri=https://develop.drpsil7pkaqr1.amplifyapp.com/&response_type=token"
              "https://accounts.spotify.com/authorize?client_id=638f3d8085194625869dd89ac86eac6e&redirect_uri=http://localhost:3000/callback/&response_type=token"
            }
          >
            Login to Spotify
          </a>
        </Button>
      ) : (
        <Navigate to="/home" replace={true} />
      )}
    </Box>
  );
}

export default App;
