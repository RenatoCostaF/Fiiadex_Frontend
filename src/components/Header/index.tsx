import * as S from "./style";

import { FiLogOut } from "react-icons/fi";
import { useAuth } from "context/AuthContext";

function Header() {
  const { handleLogout } = useAuth();

  return (
    <S.Container>
      <S.ContainerMenu>
        <S.LinkButton to="/dashboard">Início</S.LinkButton>

        <S.LinkButton to="/compra">Compra</S.LinkButton>
      </S.ContainerMenu>

      <FiLogOut
        color="#ffff00"
        size={24}
        onClick={() => handleLogout()}
        style={{ cursor: "pointer" }}
      />
    </S.Container>
  );
}

export default Header;
