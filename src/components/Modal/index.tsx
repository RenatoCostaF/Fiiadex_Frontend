import { CustomModal, CustomModalBody, CustomModalHeader } from "./style";
import { ModalTypes, useModal } from "context/ModalContext";

import { useAuth } from "context/AuthContext";
import { useEffect } from "react";

function DefaultModal({
  show,
  size,
  component,
  hasTimeOut,
  hasExpiredSection,
}: ModalTypes) {
  const { setModal } = useModal();
  const { handleLogout } = useAuth();

  const onHide = () => {
    setModal({
      show: false,
    });
  };

  useEffect(() => {
    if (hasExpiredSection) {
      const timer = setTimeout(() => {
        handleLogout();
        onHide();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [hasExpiredSection]);

  useEffect(() => {
    if (hasTimeOut) {
      const timer = setTimeout(() => {
        onHide();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [hasTimeOut]);

  return (
    <CustomModal centered show={show} size={size ?? undefined}>
      {!hasExpiredSection && (
        <CustomModalHeader closeButton onHide={onHide}></CustomModalHeader>
      )}

      <CustomModalBody>{component}</CustomModalBody>
    </CustomModal>
  );
}

export default DefaultModal;
