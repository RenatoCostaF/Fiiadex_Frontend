import { Col, Row } from "react-bootstrap";
import { Container, Title } from "./style";

import { Form } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { ICreateUser } from "./types";
import InputText from "../../../components/inputs/textInput";
import Select from "../../../components/inputs/selectInput";
import Switch from "../../../components/inputs/switchInput";
import TextButton from "../../../components/inputs/button";
import api from "../../../services/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const methods = useForm<ICreateUser>({});
  const navigate = useNavigate();

  const onSubmit = async (rowsCreate: ICreateUser) => {
    const name = rowsCreate.name;
    const email = rowsCreate.email;
    const password = rowsCreate.password;

    await api.post(`/user`, {
      name,
      email,
      password,
    });
  };

  function goBack() {
    navigate("/");
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Container>
          <Title>Cadastro de usuários</Title>
          <Col sm={4}>
            <Row>
              <Col>
                <InputText name="name" type="text" label="Nome" required />
              </Col>
            </Row>
            <Row>
              <Col>
                <InputText name="email" type="text" label="Email" required />
              </Col>
            </Row>
            <Row>
              <Col>
                <InputText
                  name="password"
                  type="number"
                  label="Password"
                  required
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <TextButton text="Enviar" type="submit" />
                <TextButton
                  text="Voltar"
                  type="button"
                  onClick={() => goBack()}
                />
              </Col>
            </Row>
          </Col>
        </Container>
      </Form>
    </FormProvider>
  );
}

export default CreateUser;
