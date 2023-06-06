import { Desaparecido } from "./desaparecido.model";

export class Familiar {
    id?: number;
    nome?: string;
    cpf?: string;
    email?: string;
    phone?: string;
    grauDeParentesco?: string;
    dataDeNascimento?: string;
    desaparecido?: Desaparecido;
  }
