import { createContext, useContext, useState } from "react";

import Loading from "../components/Loading";

interface SpinnerContextType {
  loading: boolean;
  setLoading: (b: boolean) => void;
}

export const SpinnerContext = createContext({} as SpinnerContextType);

export const SpinnerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <SpinnerContext.Provider value={{ loading, setLoading }}>
      {children}
      <Loading status={loading} />
    </SpinnerContext.Provider>
  );
};

export const useLoading = () => {
  return useContext(SpinnerContext);
};
