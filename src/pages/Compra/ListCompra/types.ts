export interface ICompra {
  id: string;
  valor: number;
  parcelas: number;
  valorParcela: number;
  valorTotal: number;
  userId: number;
  status: string;
  user: { name: string };
  CompraParcela: CompraParcela[];
}

export interface CompraParcela {
  compraId: string;
  valorParcela: string;
  dataPagamento: string;
  id: string;
  status: string;
}
