import CreateCompra from "pages/Compra/CreateCompra";
import CreateUser from "pages/User/CreateUser";
import Home from "pages/home";
import ListCompra from "pages/Compra/ListCompra";
import ListUser from "pages/User/ListUser";
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
  {
    element: ListCompra,
    path: "/ListCompra",
  },
  {
    element: CreateUser,
    path: "/user",
  },
  {
    element: ListUser,
    path: "/listUser",
  },
];
