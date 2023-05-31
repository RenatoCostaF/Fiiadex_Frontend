import { Form } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div``;

export const Label = styled(Form.Label)`
  font-size: 12px;
  line-height: 16px;

  margin-bottom: 0px;
`;

export const InputControlSwitch = styled(Form.Check)`
  margin-top: 10px;

  border-radius: 8px;
  background: transparent;
  &:focus {
    background: transparent;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  input {
    ::placeholder {
      color: red;
    }
  }
`;
