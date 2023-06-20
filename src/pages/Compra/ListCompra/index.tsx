import * as S from "./style";

import { Col, Table } from "react-bootstrap";
import { CompraParcela, ICompra } from "./types";
import { useEffect, useState } from "react";

import { AiOutlineDelete } from "react-icons/ai";
import { BsFolder2Open } from "react-icons/bs";
import FailRequest from "components/HandleRequest/Fail";
import SessaoExpirada from "components/SectionExpired";
import SucessRequest from "components/HandleRequest/Sucess";
import api from "services/api";
import { format } from "date-fns";
import { useAuth } from "context/AuthContext";
import { useModal } from "context/ModalContext";

function ListCompra() {
  const { user } = useAuth();
  const { setModal, modalBlur, setModalBlur } = useModal();

  const [dataCompra, setDataCompra] = useState<ICompra[]>([]);

  const getCompra = async () => {
    if (user) {
      try {
        const { data } = await api.get("/compra");
        setDataCompra(data.data);
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

  const handleDetail = async (data: CompraParcela[]) => {
    setModal({
      show: true,
      size: "xl",
      component: (
        <S.ContainerModal>
          {data.map((v, index) => {
            return (
              <Col sm={12} md={12} key={index}>
                <S.TitleModal>Parcela {index + 1}</S.TitleModal>
                <S.RowStyle>
                  Valor: {parseInt(v.valorParcela).toFixed(2)} R$
                </S.RowStyle>
                <S.RowStyle>
                  Data de Vencimento:{" "}
                  {format(new Date(v.dataPagamento), "dd/MM/yyyy")}
                </S.RowStyle>
                <S.RowStyle>Status: {v.status}</S.RowStyle>
              </Col>
            );
          })}
        </S.ContainerModal>
      ),
    });
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/compra/${id}`);
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
    getCompra();
  }, [modalBlur]);

  return (
    <>
      <S.TitleTable>Lista de compras</S.TitleTable>
      <S.ContainerTable>
        <Table>
          <thead>
            <tr>
              <th className="text-center">Cliente</th>
              <th className="text-center">Valor Total</th>
              <th className="text-center">Quantidade de Parcelas</th>
              <th className="text-center">Status</th>
              <th className="text-center">Detalhe Parcelas</th>
              <th className="text-center">Excluir Compra</th>
            </tr>
          </thead>
          <tbody>
            {dataCompra?.map((item: ICompra) => (
              <tr key={item.id}>
                <td className="align-middle text-center">{item.user.name}</td>
                <td className="align-middle text-center">{item.valorTotal}</td>
                <td className="align-middle text-center">{item.parcelas}</td>

                <td className="align-middle text-center">{item.status}</td>
                <td className="align-middle text-center">
                  <BsFolder2Open
                    size={24}
                    onClick={() => handleDetail(item.CompraParcela)}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </td>
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

export default ListCompra;
