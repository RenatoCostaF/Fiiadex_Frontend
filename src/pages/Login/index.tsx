import { Col, Form } from "react-bootstrap";
import { Container, Content, ImageLogo } from "./styles";
import { FormProvider, useForm } from "react-hook-form";

import { ILogin } from "utils/AuthTypes";
import InputText from "../../components/inputs/textInput";
import Logo from "assets/Logo.png";
import TextButton from "../../components/inputs/button";
import { useAuth } from "context/AuthContext";

function Login() {
  const methods = useForm<ILogin>({});
  const { handleLogin } = useAuth();

  const onSubmit = async (data: ILogin) => {
    handleLogin(data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Container>
          <Content>
            <Col sm={4}>
              <ImageLogo src={Logo} />

              <InputText name="email" type="text" label="Usuário" required />

              <InputText name="password" type="text" label="Senha" required />

              <TextButton text="Entrar" type="submit" />
            </Col>
          </Content>
        </Container>
      </Form>
    </FormProvider>
  );
}

export default Login;
