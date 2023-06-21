import PROFILES from "./Profiles";

export interface ILogin {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: PROFILES;
}

export interface IResponse {
  data: {
    token: string;
    refresh_token: string;
    user: User;
  };
  status: number;
}
