import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #1c1c1c;

  width: 100vw;
  height: 5rem;

  padding-right: 1rem;

  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ContainerMenu = styled.div`
  background-color: #1c1c1c;

  width: 100vw;
  padding-left: 5rem;
  gap: 3rem;
  display: flex;
`;

export const LinkButton = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: #fff;

  transition: 0.2s ease-in;
  &:hover {
    color: #ffff00;
  }
`;
