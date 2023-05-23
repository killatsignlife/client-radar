import { Endereco } from "./endereco.model";

export class Voluntario {
  id: number;
  name?: string;
  lastname?: string;
  dataNascimento?:string
  email?: string;
  phone?: string;
  cpf?: string;
  endereco?: Endereco;
  condicoes?: boolean;
  legitimidade?: boolean;
}
