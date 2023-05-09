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

  displayedColumns: string[] = ['Nome', 'CPF', 'Username', 'Ações'];

   // @ts-ignore: Object is possibly 'undefined'.
   funcionarios: Observable<Funcionario[]>;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.funcionarios = this.api.getFuncionario();
    console.log(this.funcionarios);
  }

  deletaUsuario(id : number) {
    this.router.navigate(['funcionarios/deletar', id]);
  }

  atualizaUsuario(id : number) {
    this.router.navigate(['funcionario/atualizar', id])
  }

}
