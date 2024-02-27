import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Products from "./Components/Products";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const navigate = useNavigate();
  const handleLogin = (username, password) => {
    // Perform authentication logic, e.g., check against hard-coded credentials
    if (username === "admin" && password === "admin") {
      setAuthenticated(true);
    }
  };
  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
  }, [authenticated, navigate]);

  return (
    <Routes>
      <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/home"
        element={authenticated ? <Products /> : <Navigate to="/signin" />}
      />
    </Routes>
  );
}

export default App;
