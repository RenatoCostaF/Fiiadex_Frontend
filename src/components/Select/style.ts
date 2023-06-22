import { Form } from "react-bootstrap";
import styled from "styled-components";

export const Group = styled(Form.Group)`
  margin-bottom: 16px;
`;

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

export const SelectControl = styled(Form.Select)`
  border-radius: 8px;
  background-color: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:focus {
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
