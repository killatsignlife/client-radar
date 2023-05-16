import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Voluntario } from 'src/app/voluntario.model';

@Component({
  selector: 'app-list-voluntario',
  templateUrl: './list-voluntario.component.html',
  styleUrls: ['./list-voluntario.component.css']
})
export class ListVoluntarioComponent implements OnInit {

  title = 'Voluntarios';
  voluntarios: Observable<Voluntario[]>;

  displayedColumns: string[] = ['Nome', 'Sobrenome', 'CPF', 'Ações'];

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.data();
  }

  data() {
    this.voluntarios = this.service.getVoluntarios();
    console.log(this.voluntarios);

  }

  addVoluntario() {
    this.router.navigate(['voluntarios/adicionar'])
  }

  atualizar(id: number) {
    this.router.navigate(['voluntarios/atualizar', id]);
  }

  deletar(id: number) {
    this.router.navigate(['voluntarios/deletar', id]);
  }

}
