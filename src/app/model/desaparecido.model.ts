import { Byte } from "@angular/compiler/src/util";
import { Endereco } from "./endereco.model";
import { Foto } from "./foto.model";

export class Desaparecido {
  idDesaparecido: number;
  nomeDesaparecido?: string;
  sobrenomeDesaparecido?: string;
  dataDesaparecimento?: string;
  horaDesaparecimento?: string;
  descricaoDesaparecido?: string;
  dataNascimento?: string;
  recompensa?: string;
  endereco?: Endereco;
  fotos?: Array<Foto>;
  possuiDoenca?: string;
  corDePeleDesaparecido?: string;
  tatuagemDesaparecido?: string;
  cicatriz?: string;
  tamanhoDesaparecido?: string;
  sexoDesaparecido?: string;
}
