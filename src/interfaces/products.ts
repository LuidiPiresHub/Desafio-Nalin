export interface IProduct {
  codigo: number;
  departamento: string;
  descricao: string;
}

export interface IProductRes {
  data: IProduct[];
  message: string;
  statusCode: number;
}
