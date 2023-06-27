import { Nav, NavDropdown, Navbar } from "react-bootstrap";

import styled from "styled-components";

export const Container = styled.div``;

export const NavDropdownContent = styled(NavDropdown)`
  .dropdown-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .dropdown-toggle:hover {
    color: grey;
  }
  .dropdown-toggle::after {
    display: none;
  }
`;

export const NavContent = styled(Nav)`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 100%;
`;

interface ContentIcon {
  isCollapsed: boolean;
  isMobile: boolean;
}

export const ContentIcon = styled.div<ContentIcon>`
  display: flex;
  justify-content: ${({ isCollapsed, isMobile }) =>
    isCollapsed && isMobile ? "center" : "end"};
  align-items: center;
  width: 100%;
`;
