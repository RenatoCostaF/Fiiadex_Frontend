import CreateCompra from "pages/Compra/CreateCompra";
import Home from "pages/home";
import Login from "pages/Login";

export const ROUTES = [
  {
    element: Login,
    path: "/",
  },
];

export const ROUTES_AUTHENTICATED = [
  {
    element: Home,
    path: "/dashboard",
  },
  {
    element: CreateCompra,
    path: "/compra",
  },
];
