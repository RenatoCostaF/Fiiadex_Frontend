import * as S from "./styles";

import { Col, Form } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";

import { ILogin } from "utils/AuthTypes";
import InputText from "../../components/inputs/textInput";
import Logo from "../../assets/Logo.png";
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
        <S.Container>
          <Col sm={4} md={4} lg={2}>
            <S.ImageLogo src={Logo} />

            <InputText name="email" type="text" label="Usuário" required />

            <InputText name="password" type="text" label="Senha" required />

            <TextButton text="Entrar" type="submit" />
          </Col>
        </S.Container>
      </Form>
    </FormProvider>
  );
}

export default Login;
