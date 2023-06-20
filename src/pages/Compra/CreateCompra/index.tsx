import * as S from "./style";

import { Col, Row } from "react-bootstrap";

import FailRequest from "components/HandleRequest/Fail";
import { Form } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { ICreateCompra } from "./types";
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

function CreateCompra() {
  const { user } = useAuth();
  const { setModal } = useModal();
  const navigate = useNavigate();
  const methods = useForm<ICreateCompra>({});

  const valorTotal = methods.watch("valorTotal");

  const onSubmit = async (compra: ICreateCompra) => {
    const body = {
      parcelas: parseInt(compra.parcelas),
      valorTotal: parseInt(compra.valorTotal),
      dataCompra: new Date(compra.dataCompra),
      userId: user?.id,
    };

    if (user) {
      try {
        const response: any = await api.post(`/compra`, body);
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
        <S.Title>Cadastro de compra</S.Title>
        <S.Container>
          <Col sm={4} md={2}>
            <Row>
              <InputText
                name="valorTotal"
                type="number"
                label="Valor total"
                required
              />
            </Row>
            <Row>
              <Select
                name="parcelas"
                label="Parcelas"
                options={
                  valorTotal
                    ? [
                        {
                          id: 0,
                          value: "",
                          name: "Selecione",
                          disabled: true,
                        },
                        {
                          id: "1",
                          value: "1",
                          name: `1x de ${parseInt(valorTotal)} R$`,
                        },
                        {
                          id: "2",
                          value: "2",
                          name: `2x de ${(parseInt(valorTotal) / 2).toFixed(
                            2
                          )} R$`,
                        },
                        {
                          id: "3",
                          value: "3",
                          name: `3x de ${(parseInt(valorTotal) / 3).toFixed(
                            2
                          )} R$`,
                        },
                      ]
                    : [
                        {
                          id: 0,
                          value: "",
                          name: "Preencha valor total",
                          disabled: true,
                        },
                      ]
                }
                required
              />
            </Row>
            <Row>
              <InputText
                name="dataCompra"
                type="date"
                label="Data da compra"
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

export default CreateCompra;
