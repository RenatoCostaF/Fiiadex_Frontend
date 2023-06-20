import * as S from "./style";

import { useEffect, useState } from "react";

import { AiOutlineDelete } from "react-icons/ai";
import FailRequest from "components/HandleRequest/Fail";
import { IUser } from "./types";
import SessaoExpirada from "components/SectionExpired";
import SucessRequest from "components/HandleRequest/Sucess";
import { Table } from "react-bootstrap";
import api from "services/api";
import { useAuth } from "context/AuthContext";
import { useModal } from "context/ModalContext";

function ListUser() {
  const { user } = useAuth();
  const { setModal, modalBlur, setModalBlur } = useModal();

  const [dataUser, setDataUser] = useState<IUser[]>([]);

  const getUser = async () => {
    if (user) {
      try {
        const { data } = await api.get("/user");
        setDataUser(data.data);
      } catch (err) {}
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
    try {
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
    }
  };

  useEffect(() => {
    getUser();
  }, [modalBlur]);

  return (
    <>
      <S.TitleTable>Lista de usuários</S.TitleTable>
      <S.ContainerTable>
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
      </S.ContainerTable>
    </>
  );
}

export default ListUser;
