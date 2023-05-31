import { Endereco } from "./endereco.model";

export class Voluntario {
  id: number;
  nome?: string;
  sobrenome?: string;
  email?: string;
  telefone?: string;
  cpf?: string;
  dataNascimento?:string
  endereco?: Endereco;
  condicoes?: boolean;
  legitimidade?: boolean;
}
