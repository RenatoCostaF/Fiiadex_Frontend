import { CustomModal, CustomModalBody, CustomModalHeader } from "./style";
import { ModalTypes, useModal } from "context/ModalContext";

function DefaultModal({ show, size, component }: ModalTypes) {
  const { setModal } = useModal();

  const onHide = () => {
    setModal({
      show: false,
    });
  };

  return (
    <CustomModal centered show={show} size={size ?? undefined}>
      <CustomModalHeader closeButton onHide={onHide}></CustomModalHeader>

      <CustomModalBody>{component}</CustomModalBody>
    </CustomModal>
  );
}

export default DefaultModal;
