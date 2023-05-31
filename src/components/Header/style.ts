import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #1c1c1c;

  width: 100vw;
  height: 3rem;

  padding-right: 1rem;

  display: flex;
  justify-content: end;
  align-items: center;
`;

export const LinkContent = styled(Link)`
  font-size: 1.5em;
  color: #dcdcdc;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s ease-in;

  &:hover {
    color: #ffff00;
  }
`;
