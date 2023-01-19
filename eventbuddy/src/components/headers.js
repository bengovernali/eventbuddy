import React from "react";
import { AppBar, Typography, Button, Toolbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AppBar color="primary" sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ mr: 2, flexGrow: 1 }} color="primary.textColor">
          EventBuddy
        </Typography>
        {location.pathname !== "/" ? (
          <Button variant="text" color="text" onClick={logout}>
            Logout
          </Button>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}
