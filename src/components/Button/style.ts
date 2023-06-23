import { Button } from "react-bootstrap";
import styled from "styled-components";

interface CustomButtonProps {
  width?: string;
  minWidth?: string;
  borderRadius?: string;
}

export const CustomButton = styled(Button)<CustomButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;
  transition: 0.5s;
  margin-top: 20px;
  /* background: none; */
  width: ${({ width }) => (width ? width : "100%")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "100")};
  &.btn-inside:hover,
  &.btn-inside:active,
  &.btn-inside:focus {
    color: white;
    background: variant;
  }
  &.btn-inside:disabled {
    background: none;
    outline: 0px !important;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const TextContainer = styled.div`
  display: flex;
  text-decoration: none;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
`;
