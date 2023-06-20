import * as S from "./style";

import { Col, Row } from "react-bootstrap";

import FailRequest from "components/HandleRequest/Fail";
import { Form } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { ICreateUser } from "./types";
import InputText from "../../../components/inputs/textInput";
import Select from "components/inputs/selectInput";
import SessaoExpirada from "components/SectionExpired";
import SucessRequest from "components/HandleRequest/Sucess";
import TextButton from "../../../components/inputs/button";
import api from "../../../services/api";
import { useAuth } from "context/AuthContext";
import { useForm } from "react-hook-form";
import { useModal } from "context/ModalContext";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const { user } = useAuth();
  const { setModal } = useModal();
  const navigate = useNavigate();
  const methods = useForm<ICreateUser>({});

  const onSubmit = async (compra: ICreateUser) => {
    const body = {
      name: compra.name,
      email: compra.email,
      password: compra.password,
      role: compra.role,
    };

    if (user) {
      try {
        const response: any = await api.post(`/user`, body);
        setModal({
          show: true,
          size: "sm",
          hasTimeOut: true,
          component: <SucessRequest message={response.data.message} />,
        });
        navigate("/dashboard");
      } catch (err: any) {
        setModal({
          show: true,
          size: "sm",
          hasTimeOut: true,
          component: <FailRequest message={err.response.data.message} />,
        });
      }
    } else {
      setModal({
        show: true,
        size: "sm",
        hasExpiredSection: true,
        component: <SessaoExpirada />,
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <S.TitleTable>Cadastro de usuário</S.TitleTable>
        <S.Container>
          <Col sm={4} md={2}>
            <Row>
              <InputText name="name" type="text" label="Nome" required />
            </Row>
            <Row>
              <InputText name="email" type="text" label="Email" required />
            </Row>
            <Row>
              <InputText name="password" type="text" label="Senha" required />
            </Row>
            <Row>
              <Select
                name="role"
                label="Perfil"
                options={[
                  {
                    id: 0,
                    value: "",
                    name: "Selecione",
                    disabled: true,
                  },
                  {
                    id: "ADMIN",
                    value: "ADMIN",
                    name: "ADMIN",
                  },
                  {
                    id: "USER",
                    value: "USER",
                    name: "USER",
                  },
                ]}
                required
              />
            </Row>

            <Row className="justify-content-end">
              <TextButton width="160px" text="Enviar" type="submit" />
            </Row>
          </Col>
        </S.Container>
      </Form>
    </FormProvider>
  );
}

export default CreateUser;
