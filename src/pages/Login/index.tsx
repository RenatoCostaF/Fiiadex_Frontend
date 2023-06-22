import * as S from "./styles";

import { Col, Form } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";

import Button from "../../components/Button";
import { ILogin } from "utils/AuthTypes";
import Input from "../../components/Input";
import Logo from "../../assets/Logo.png";
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

            <Input
              name="email"
              type="text"
              label="Usuário"
              error={!!methods.formState.errors.email}
              required
            />

            <Input
              name="password"
              type="text"
              label="Senha"
              error={!!methods.formState.errors.password}
              required
            />

            <Button text="Entrar" type="submit" />
          </Col>
        </S.Container>
      </Form>
    </FormProvider>
  );
}

export default Login;
