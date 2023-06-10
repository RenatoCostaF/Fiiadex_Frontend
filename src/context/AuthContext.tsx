import { ILogin, IResponse, User } from "utils/AuthTypes";
import { createContext, useContext, useEffect, useState } from "react";

import FailRequest from "components/HandleRequest/Fail";
import api from "services/api";
import { useLoading } from "./LoadingContext";
import { useModal } from "./ModalContext";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: User | undefined;
  handleLogin: (data: ILogin) => void;
  handleLogout: () => void;
  cleanState: () => void;
  authenticated: boolean;
  setAuthenticated: (b: boolean) => void;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
  }, []);

  const handleLogin = async (data: ILogin) => {
    try {
      setLoading(true);
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");

      const response: IResponse = await api.post("/login", data);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      setUser(response.data.user);

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      navigate("/dashboard");
      setLoading(false);
      setAuthenticated(true);
      return;
    } catch (err: any) {
      setLoading(false);
      setAuthenticated(false);
      return;
    }
  };

  const handleLogout = () => {
    cleanState();
    navigate("/");
  };

  const cleanState = () => {
    setUser(undefined);
    delete api.defaults.headers.common["Authorization"];

    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");

    return;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleLogin,
        authenticated,
        setAuthenticated,
        handleLogout,
        cleanState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
