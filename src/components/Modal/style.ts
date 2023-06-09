import { ModalBody, ModalHeader } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
  padding: 10px;
  z-index: 9999;
`;

export const CustomModalHeader = styled(ModalHeader)`
  border-bottom: none;
`;

export const CustomModalBody = styled(ModalBody)`
  font-size: 20px;
  line-height: 20px;
  padding-bottom: 100px;
`;
