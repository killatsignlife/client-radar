import { Endereco } from "./endereco.model";

export class Doador {
    id: number;
    nome?: string;
    sobrenome?: string;
    cpf?: string;
    endereco?: Endereco;
    valor?: number;
    phone?: string;

  }