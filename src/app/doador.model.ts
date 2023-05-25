import { Endereco } from "./endereco.model";

export class Doador {
  idDoador: number;
  nome?: string;
  sobrenome?: string;
  cpf?: string;
  endereco?: Endereco;
  valor?: number;
  telefone?: string;

}