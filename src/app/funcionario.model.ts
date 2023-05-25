import { Endereco } from "./endereco.model";

export class Funcionario {
  id?: number;
  nome?: string;
  sobrenome?: string;
  cpf?: string;
  email?: string;
  dataNascimento?: string;
  phone?: string;
  funcao?: string;
  endereco?: Endereco;
}