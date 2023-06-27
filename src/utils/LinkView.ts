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
        profiles: [PROFILES.ADMIN, PROFILES.USER],
      },
      {
        title: "Listar Compras",
        path: "/listar-compras",
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
        path: "/listar-usuarios",
        profiles: [PROFILES.ADMIN],
      },
    ],
  },
];

export default links;
