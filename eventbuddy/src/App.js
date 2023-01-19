import React, { useEffect } from "react";
import { useRecoilState, atom } from "recoil";
import { Navigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import Header from "./components/headers";

const tokenState = atom({
  key: "token",
  default: ""
})

function App() {
  const [token, setToken] = useRecoilState(tokenState);

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
        justifyContent: "center"
      }}
    >
      <Header />
      {!token ? (
        <Button color="primary" variant="contained">
          <a
            href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`}
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
