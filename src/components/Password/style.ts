import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import styled from "styled-components";

export const Group = styled(InputGroup)``;

export const Label = styled(Form.Label)`
  font-size: 12px;
  line-height: 16px;

  margin-bottom: 0px;
`;

export const LabelError = styled(Form.Text)`
  font-size: 12px;
  line-height: 16px;

  margin-bottom: 0px;
`;

export const InputControl = styled(Form.Control)<{ error?: boolean | string }>`
  border-radius: 8px;
  background: transparent;
  border-color: ${(p) => (p.error ? "#F28181" : "#c6c5c5")};

  &:focus {
    background: transparent;
    border-color: ${(p) => (p.error ? "#F28181" : "#c6c5c5")};
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export const InputEye = styled(InputGroup.Text)<{ error?: boolean | string }>`
  cursor: pointer;
  border-color: ${(p) => (p.error ? "#F28181" : "#c6c5c5")};
  background: transparent;
  border-left: 0px;
`;
