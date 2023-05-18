import { Endereco } from "./endereco.model";

export class Doador {
    id?: number;
    name?: string;
    lastname?: string;
    cpf?: string;
    phone?: string;
    endereco?: Endereco;
    valor?: number;
  }