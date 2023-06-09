import { ButtonInput, Container, ContainerMenu } from "./style";

import CreateCompra from "pages/Compra/CreateCompra";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "context/AuthContext";
import { useModal } from "context/ModalContext";

function Header() {
  const { handleLogout } = useAuth();

  const { setModal } = useModal();

  const handleCompra = () => {
    setModal({
      show: true,
      size: "lg",
      component: <CreateCompra />,
    });
  };

  return (
    <Container>
      <ContainerMenu>
        <ButtonInput type="button" onClick={() => handleCompra()}>
          Criar Compra
        </ButtonInput>
      </ContainerMenu>

      <FiLogOut
        color="#ffff00"
        size={24}
        onClick={() => handleLogout()}
        style={{ cursor: "pointer" }}
      />
    </Container>
  );
}

export default Header;
