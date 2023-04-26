import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-voluntario',
  templateUrl: './list-voluntario.component.html',
  styleUrls: ['./list-voluntario.component.css']
})
export class ListVoluntarioComponent implements OnInit {

  title = 'Desaparecidos';
  desaparecidos: Observable<Desaparecido[]>;

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.data();
  }

  data() {
    this.desaparecidos = this.service.getDesaparecidos();
    console.log(this.desaparecidos);

  }

  addDesaparecido() {
    this.router.navigate(['desaparecido/adicionar'])
  }

  detailDesaparecido(id: number) {
    this.router.navigate(['descricao', id])
  }

  atualizarDesaparecido(id: number) {
    this.router.navigate(['desaparecido/atualizar', id]);
  }

  deletarDesaparecido(id: number) {
    this.router.navigate(['desaparecido/deletar', id]);
  }

}
