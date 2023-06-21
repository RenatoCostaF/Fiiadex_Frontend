export interface ICompra {
  id: string;
  parcelas: number;
  valorTotal: number;
  userId: number;
  status: string;
  user: { name: string };
  dataCompra: string;
  CompraParcela: CompraParcela[];
}

export interface CompraParcela {
  compraId: string;
  valorParcela: string;
  dataPagamento: string;
  id: string;
  status: string;
}
