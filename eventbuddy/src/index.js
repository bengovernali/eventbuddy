import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import App from "./App";
import Home from "./routes/home";
import Callback from "./routes/callback"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RecoilRoot } from "recoil";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1DB954",
      contrastText: "FFFFFF",
      textColor: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      main: "#FFFFFF",
    },
  },
});

Amplify.configure(config);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/callback",
    element: <Callback />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
