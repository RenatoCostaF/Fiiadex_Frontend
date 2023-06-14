import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";

import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "context/AuthContext";

function Header() {
  const { handleLogout } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 992px)");

    const handleResize = (event: any) => {
      setIsMobile(event.matches);
    };

    handleResize(mediaQuery);

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    //     <FiLogOut
    //       color="#ffff00"
    //       size={24}
    //       onClick={() => handleLogout()}
    //       style={{ cursor: "pointer" }}
    //     />

    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column">
      <Container>
        <Navbar.Toggle aria-controls="sidebar-nav" />

        <Navbar.Collapse id="sidebar-nav">
          <Nav className={isMobile ? "flex-column" : "flex-row"}>
            <NavDropdown title="Compra">
              <NavDropdown.Item as={Link} to="/compra">
                Cadastrar Compra
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ListCompra">
                Listar Compra
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <FiLogOut
          color="#fff"
          size={24}
          onClick={() => handleLogout()}
          style={{
            cursor: "pointer",
          }}
        />
      </Container>
    </Navbar>
  );
}

export default Header;
