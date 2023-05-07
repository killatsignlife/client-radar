import { Endereco } from "./endereco.model";
import { Foto } from "./foto.model";

export class Desaparecido {
  id: number;
  nomeDesaparecido?: string;
  sobrenomeDesaparecido?: string;
  dataDesaparecimento?: string;
  horaDesaparecimento?: string;
  descricaoDesaparecimento?: string;
  dataDeNascimento?: string;
  recompensa?: string;
  endereco?: Endereco;
  fotos?: Foto[];
  possuiDoenca?: string;
  corDePeleDesaparecido?: string;
  tatuagemDesaparecido?: string;
  cicatriz?: string;
  tamanhoDesaparecido?: string;
  sexoDesaparecido?: string;
}
