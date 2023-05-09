import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

import { Funcionario } from 'src/app/funcionario.model';

@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.css']
})
export class ListFuncionarioComponent implements OnInit {

  displayedColumns: string[] = ['Nome', 'Sobrenome', 'CPF', 'Ações'];

   // @ts-ignore: Object is possibly 'undefined'.
   funcionarios: Observable<Funcionario[]>;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  addFuncionario() {
    this.router.navigate(['funcionario/adicionar']);
  }

  reloadData() {
    this.funcionarios = this.api.getFuncionario();
    console.log(this.funcionarios);
  }

  deletaUsuario(id : number) {
    console.log(id);
    this.router.navigate(['funcionario/deletar', id]);
  }

  atualizaUsuario(id : number) {
    console.log(id);
    this.router.navigate(['funcionario/atualizar', id])
  }

}
