import type { IAuth } from './auth'

export interface IForm {
  ds_login: string;
  ds_senha: string;
}

export interface ILoginRes {
  data: Array<IAuth>;
  message: string;
  statusCode: number;
}
