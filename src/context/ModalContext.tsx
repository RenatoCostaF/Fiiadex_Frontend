import { createContext, useContext, useEffect, useState } from "react";

import DefaultModal from "components/Modal";

export interface ModalTypes {
  show: boolean;
  children?: React.ReactNode;
  component?: JSX.Element;
  size?: "xl" | "lg" | "sm" | "md";
}

interface ModalContextType {
  setModal: (props: ModalTypes) => void;
  setModalBlur: (status: boolean) => void;
  modalBlur: boolean;
}

export const ModalContext = createContext({} as ModalContextType);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState({} as ModalTypes);
  const [modalBlur, setModalBlur] = useState(false);

  useEffect(() => {
    if (modal?.show) {
      setModalBlur(false);
    }
  }, [modal?.show]);

  return (
    <ModalContext.Provider value={{ setModal, modalBlur, setModalBlur }}>
      {children}
      <DefaultModal {...modal} />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
