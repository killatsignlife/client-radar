import { FileHandle } from "./model/image-handle.model";

export class Desaparecido {
  id: number;
  dataEHoraDesaparecimento?: string;
  urlFotoPrincipal?: Array<string>;
  altTxtFotoPrincipal?: string;
  descricaoDesaparecimento?: string;
  nomeCompletoDesaparecido?: string;
  dataDeNascimento?: string;
  recompensa?: string;
  doenca?: string;
  sexo?: string;
  corDePele?: string;
  logradouro?: string;
  bairro?: string;
  cidade?: string;
  cep?: string;
}
