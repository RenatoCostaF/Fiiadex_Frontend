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

export const ContainerMenu = styled.div`
  background-color: #1c1c1c;

  width: 100vw;
  padding-left: 5rem;
  gap: 3rem;
  display: flex;
`;

export const ButtonInput = styled.button`
  text-decoration: none;
  outline-style: none;
  background-color: #1c1c1c;
  border: none;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s ease-in;

  &:hover {
    color: #ffff00;
  }
`;
