import CreateCompra from "pages/Compra/CreateCompra";
import CreateUser from "pages/User/CreateUser";
import Home from "pages/home";
import ListCompra from "pages/Compra/ListCompra";
import ListUser from "pages/User/ListUser";
import Login from "pages/Login";
import PROFILES from "utils/Profiles";

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
    profiles: [PROFILES.ADMIN, PROFILES.USER],
  },
  {
    element: CreateCompra,
    path: "/compra",
    profiles: [PROFILES.ADMIN],
  },
  {
    element: ListCompra,
    path: "/listar-compras",
    profiles: [PROFILES.ADMIN, PROFILES.USER],
  },
  {
    element: CreateUser,
    path: "/user",
    profiles: [PROFILES.ADMIN],
  },
  {
    element: ListUser,
    path: "/listar-usuarios",
    profiles: [PROFILES.ADMIN],
  },
];
