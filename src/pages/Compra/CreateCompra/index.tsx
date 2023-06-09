import { Col, Row } from "react-bootstrap";
import { Container, Title } from "./style";

import { Form } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { ICreateCompra } from "./types";
import InputText from "../../../components/inputs/textInput";
import TextButton from "../../../components/inputs/button";
import api from "../../../services/api";
import { useAuth } from "context/AuthContext";
import { useForm } from "react-hook-form";
import { useModal } from "context/ModalContext";

function CreateCompra() {
  const { user } = useAuth();
  const { setModal } = useModal();
  const methods = useForm<ICreateCompra>({});

  const onSubmit = async (compra: ICreateCompra) => {
    const body = {
      parcelas: compra.parcelas,
      valorParcela: compra.valorParcela,
      valorTotal: compra.valorTotal,
      userId: user?.id,
    };

    try {
      await api.post(`/compra`, body);
      setModal({
        show: false,
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Container>
          <Title>Cadastro de compra</Title>
          <Col sm={4}>
            <Row>
              <Col>
                <InputText
                  name="parcelas"
                  type="number"
                  label="Parcelas"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <InputText
                  name="valorParcela"
                  type="number"
                  label="Valor das parcelas"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <InputText
                  name="valorTotal"
                  type="number"
                  label="Valor total"
                  required
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <TextButton text="Enviar" type="submit" />
              </Col>
            </Row>
          </Col>
        </Container>
      </Form>
    </FormProvider>
  );
}

export default CreateCompra;
