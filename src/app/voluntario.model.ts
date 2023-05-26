import { Endereco } from "./endereco.model";

export class Voluntario {
  id: number;
  nome?: string;
  sobrenome?: string;
  dataNascimento?:string
  email?: string;
  telefone?: string;
  cpf?: string;
  endereco?: Endereco;
  condicoes?: boolean;
  legitimidade?: boolean;
}
