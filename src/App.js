import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Products from "./Components/Products";
import MyDashboard from "./Components/MyDashboard";
import PageNotFound from "./Components/PageNotFound";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
    common: {
      black: "#0B2447",
      white: "#A5D7E8",
    },
    primary: {
      main: "#070F2B",
      contrastText: "#A6E3E9",
    },
    secondary: {
      main: "#7BD3EA",
      contrastText: "#A6E3E9",
    },
    text: {
      primary: "#A6E3E9",
    },
  },
  typography: {
    fontFamily: "Arial",
  },
});

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated =
      sessionStorage.getItem("isAuthenticated") === "true";
    setAuthenticated(isAuthenticated);
  }, []);

  const handleLogin = (validated) => {
    // Perform authentication logic, e.g., check against hard-coded credentials
    if (validated) {
      sessionStorage.setItem("isAuthenticated", true);
      setAuthenticated(true);
      navigate("/products");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SignIn onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
        <Route
          path="/products"
          element={authenticated ? <Products /> : <Navigate to="/" />}
        />
        <Route
          path="/dashboard"
          element={authenticated ? <MyDashboard /> : <Navigate to="/" />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
