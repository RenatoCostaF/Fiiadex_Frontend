import * as S from "./style";

import { Col, Container, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";

import { AiOutlineDelete } from "react-icons/ai";
import Button from "components/Button";
import FailRequest from "components/HandleRequest/Fail";
import { IUser } from "./types";
import SessaoExpirada from "components/SectionExpired";
import SucessRequest from "components/HandleRequest/Sucess";
import api from "services/api";
import { useAuth } from "context/AuthContext";
import { useLoading } from "context/LoadingContext";
import { useModal } from "context/ModalContext";

function ListUser() {
  const { user } = useAuth();
  const { setLoading } = useLoading();
  const { setModal, modalBlur, setModalBlur } = useModal();

  const [dataUser, setDataUser] = useState<IUser[]>([]);

  const getUser = async () => {
    if (user) {
      try {
        setLoading(true);
        const { data } = await api.get("/user");
        setDataUser(data.data);
      } catch (err) {
      } finally {
        setLoading(false);
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

  const handleDelete = async (id: string) => {
    setModal({
      show: true,
      size: "sm",
      component: (
        <Col>
          <S.TitleTable>Confirmar?</S.TitleTable>
          <Button
            text="Sim"
            type="button"
            onClick={() => submitDelete(id)}
          ></Button>
          <Button
            text="Não"
            type="button"
            onClick={() => setModal({ show: false })}
          ></Button>
        </Col>
      ),
    });
  };

  const submitDelete = async (id: string) => {
    try {
      setLoading(true);
      await api.delete(`/user/${id}`);
      setModal({
        show: true,
        size: "sm",
        hasTimeOut: true,
        component: <SucessRequest message="Deletado com sucesso!" />,
      });
      setModalBlur(true);
    } catch (err) {
      setModal({
        show: true,
        size: "sm",
        hasTimeOut: true,
        component: <FailRequest message="Erro ao deletar!" />,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [modalBlur]);

  return (
    <>
      <S.TitleTable>Lista de usuários</S.TitleTable>
      <Container style={{ overflowX: "auto" }}>
        <Table>
          <thead>
            <tr>
              <th className="text-center">Nome</th>
              <th className="text-center">Email</th>
              <th className="text-center">Perfil</th>
            </tr>
          </thead>
          <tbody>
            {dataUser?.map((item: IUser) => (
              <tr key={item.id}>
                <td className="align-middle text-center">{item.name}</td>
                <td className="align-middle text-center">{item.email}</td>
                <td className="align-middle text-center">{item.role}</td>

                <td className="align-middle text-center">
                  <AiOutlineDelete
                    size={24}
                    onClick={() => handleDelete(item.id)}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default ListUser;
