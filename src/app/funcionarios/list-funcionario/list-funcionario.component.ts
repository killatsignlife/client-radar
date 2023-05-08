import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.css']
})
export class ListFuncionarioComponent implements OnInit {

  displayedColumns: string[] = ['Nome', 'CPF', 'Username', 'Ações'];

   // @ts-ignore: Object is possibly 'undefined'.
   usuarios: Observable<Funcionario[]>;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.usuarios = this.api.getFuncionarios();
    console.log(this.usuarios);
  }

  deletaUsuario(id : number) {
    this.router.navigate(['funcionarios/deletar', id]);
  }

  atualizaUsuario(id : number) {
    this.router.navigate(['funcionario/atualizar', id])
  }

}
