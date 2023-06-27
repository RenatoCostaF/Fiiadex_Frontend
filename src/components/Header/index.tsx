import * as S from "./style";

import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import links from "utils/LinkView";
import { useAuth } from "context/AuthContext";

function Header() {
  const { profile, handleLogout } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

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
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls="navbar-collapse"
          aria-expanded={!isCollapsed}
        />

        <Navbar.Collapse>
          <S.NavContent className={isMobile ? "flex-column" : "flex-row"}>
            {links.map((link, index) => {
              if (profile && link.profiles.includes(profile)) {
                return (
                  <React.Fragment key={index}>
                    <S.NavDropdownContent title={link.title}>
                      {link.submenu?.length &&
                        link.submenu.map((submenu, subIndex) => {
                          if (profile && submenu.profiles.includes(profile)) {
                            return (
                              <React.Fragment key={subIndex}>
                                <NavDropdown.Item as={Link} to={submenu.path}>
                                  {submenu.title}
                                </NavDropdown.Item>
                              </React.Fragment>
                            );
                          }
                          return;
                        })}
                    </S.NavDropdownContent>
                    ;
                  </React.Fragment>
                );
              }
            })}
            <S.ContentIcon isCollapsed={isCollapsed} isMobile={isMobile}>
              <FiLogOut
                color="#fff"
                size={24}
                onClick={() => handleLogout()}
                style={{
                  cursor: "pointer",
                }}
              />
            </S.ContentIcon>
          </S.NavContent>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
