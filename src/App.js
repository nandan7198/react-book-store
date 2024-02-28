import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Products from "./Components/Products";
import MyDashboard from "./Components/MyDashboard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
      navigate("/home");
    }
  };

  return (
    <Routes>
      <Route path="/" element={<SignIn onLogin={handleLogin} />} />
      <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
      <Route
        path="/home"
        element={authenticated ? <Products /> : <Navigate to="/" />}
      />
      <Route
        path="/dashboard"
        element={authenticated ? <MyDashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
