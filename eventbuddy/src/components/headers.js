import React from "react";
import { AppBar, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar color="primary">
      <Typography variant="h6" color="primary.textColor" sx={{ margin: "15px"}}>
        EventBuddy
      </Typography>
    </AppBar>
  );
}
