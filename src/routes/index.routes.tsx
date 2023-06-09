import { Link, Route, Routes } from "react-router-dom";

import CreateCompra from "pages/Compra/CreateCompra";
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
      <Route path="/createCompra" element={<CreateCompra />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default Paths;
