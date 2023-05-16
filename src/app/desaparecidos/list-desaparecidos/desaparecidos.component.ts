import { Component, OnInit } from '@angular/core';
import { elementAt, Observable } from 'rxjs';
import { Router } from '@angular/router'
import { ApiService } from 'src/app/api.service';
import { Desaparecido } from 'src/app/desaparecido.model';

//---------------------------------------------------------------------------

@Component({
  selector: 'app-desaparecidos',
  templateUrl: './desaparecidos.component.html',
  styleUrls: ['./desaparecidos.component.css']
})

//----------------------------------------------------------------------------
export class DesaparecidosComponent implements OnInit {
  title = 'Desaparecidos';
  desaparecidos: Observable<Desaparecido[]>;

  fotos: string;

  displayedColumns: string[] = ['Nome', 'Sobrenome', 'CPF', 'Ações'];

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
