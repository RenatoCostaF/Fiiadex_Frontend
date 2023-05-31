import { Container, LinkContent } from "./style";

import { FiLogOut } from "react-icons/fi";
import { useAuth } from "context/AuthContext";

function Header() {
  const { handleLogout } = useAuth();
  return (
    <Container>
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
