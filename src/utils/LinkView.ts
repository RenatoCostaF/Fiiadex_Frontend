import PROFILES from "./Profiles";

const links = [
  {
    title: "Compra",
    path: "/compra",
    profiles: [PROFILES.ADMIN, PROFILES.USER],
    submenu: [
      {
        title: "Cadastrar compra",
        path: "/compra",
        profiles: [PROFILES.ADMIN],
      },
      {
        title: "Listar Compras",
        path: "/ListCompra",
        profiles: [PROFILES.ADMIN, PROFILES.USER],
      },
    ],
  },
  {
    title: "Usuário",
    path: "/user",
    profiles: [PROFILES.ADMIN],
    submenu: [
      {
        title: "Cadastrar usuário",
        path: "/user",
        profiles: [PROFILES.ADMIN],
      },
      {
        title: "Listar usuários",
        path: "/listUser",
        profiles: [PROFILES.ADMIN],
      },
    ],
  },
];

export default links;
