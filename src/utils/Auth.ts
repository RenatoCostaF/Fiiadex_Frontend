export interface ILogin {
  email: string;
  password: string;
}

export interface IResponse {
  data: {
    token: string;
    refresh_token: string;
  };
  status: number;
}
