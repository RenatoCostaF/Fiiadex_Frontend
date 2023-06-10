import * as S from "./style";

import { Col } from "react-bootstrap";
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
      parcelas: compra.parcelas,
      valorParcela: compra.valorParcela,
      valorTotal: compra.valorTotal,
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
        <S.Container>
          <S.ContainerForm>
            <S.Title>Cadastro de compra</S.Title>
            <Col sm={6} md={4}>
              <InputText
                name="valorTotal"
                type="number"
                label="Valor total"
                required
              />
            </Col>
            <Col sm={6} md={4}>
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
                          name: `1x de ${valorTotal} R$`,
                        },
                        {
                          id: "2",
                          value: "2",
                          name: `2x de ${(valorTotal / 2).toFixed(2)} R$`,
                        },
                        {
                          id: "3",
                          value: "3",
                          name: `3x de ${(valorTotal / 3).toFixed(2)} R$`,
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
            </Col>
            <Col sm={6} md={4}>
              <InputText
                name="valorParcela"
                type="number"
                label="Valor das parcelas"
                required
              />
            </Col>

            <Col sm={6} md={4}>
              <TextButton text="Enviar" type="submit" />
            </Col>
          </S.ContainerForm>
        </S.Container>
      </Form>
    </FormProvider>
  );
}

export default CreateCompra;
