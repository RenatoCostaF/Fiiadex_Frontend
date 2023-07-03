import { Row } from "react-bootstrap";
import styled from "styled-components";

export const ContainerModalParcelas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
`;

export const TitleTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 2rem;
  font-size: 2rem;
`;

export const TitleModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem;

  background-color: #1c1c1c;
  color: #fff;
`;

export const RowStyle = styled(Row)`
  display: flex;
  justify-content: start;
  align-items: center;

  margin: 1rem 1rem;
`;
