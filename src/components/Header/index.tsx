import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";

import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import links from "utils/LinkView";
import { useAuth } from "context/AuthContext";

function Header() {
  const { profile, handleLogout } = useAuth();
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
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column">
      <Container>
        <Navbar.Toggle aria-controls="sidebar-nav" />

        <Navbar.Collapse id="sidebar-nav">
          <Nav className={isMobile ? "flex-column" : "flex-row"}>
            {links.map((link) => {
              if (profile && link.profiles.includes(profile)) {
                return (
                  <>
                    <NavDropdown title={link.title}>
                      {link.submenu?.length &&
                        link.submenu.map((submenu) => {
                          if (profile && submenu.profiles.includes(profile)) {
                            return (
                              <>
                                <NavDropdown.Item as={Link} to={submenu.path}>
                                  {submenu.title}
                                </NavDropdown.Item>
                              </>
                            );
                          }
                          return;
                        })}
                    </NavDropdown>
                    ;
                  </>
                );
              }
            })}
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
