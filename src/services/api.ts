import axios, { AxiosError, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function refreshToken(error: AxiosResponse, token: string) {
  return new Promise(async (resolve, reject) => {
    try {
      const refresh_token = localStorage.getItem("refresh_token");
      const body = {
        refresh_token,
      };

      const headers = {
        authorization: `Bearer ${token}`,
      };

      api
        .post("refresh-token", body, { headers: headers })
        .then(async (res) => {
          localStorage.setItem(
            "refresh_token",
            res?.data?.refresh_token ? res?.data?.refresh_token : refresh_token
          );
          localStorage.setItem("token", res?.data?.token);

          return resolve(res?.data?.token);
        })
        .catch(async () => {
          window.location.href = "/";
          return reject(error);
        });
    } catch (err) {
      window.location.href = "/";
      return reject(err);
    }
  });
}

const responseErrorHandler = async (error: any) => {
  const originalConfig = error.config;

  const token = localStorage.getItem("token");

  if (!token) {
    localStorage.clear();
    window.location.href = "/";
  }

  if (error.response?.status === 401 && !originalConfig?._retry) {
    originalConfig._retry = true;

    try {
      await refreshToken(error, token as string);

      return api(originalConfig);
    } catch (err: any) {
      if (err.response && err.response.data) {
        window.location.href = "/";
        return Promise.reject(err.response.data);
      }
      window.location.href = "/";
      return Promise.reject(err);
    }
  }

  return Promise.reject(error);
};

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => responseErrorHandler(error)
);

export default api;
