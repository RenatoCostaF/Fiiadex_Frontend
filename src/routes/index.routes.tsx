import { Link, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/Login";
import { useAuth } from "context/AuthContext";

function Paths() {
  const { authenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={authenticated ? <Home /> : <Link to="/" />}
      />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default Paths;
