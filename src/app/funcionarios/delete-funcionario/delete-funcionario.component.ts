import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Funcionario } from 'src/app/funcionario.model';

@Component({
  selector: 'app-delete-funcionario',
  templateUrl: './delete-funcionario.component.html',
  styleUrls: ['./delete-funcionario.component.css']
})
export class DeleteFuncionarioComponent implements OnInit {

  // @ts-ignore: Object is possibly 'undefined'.
  funcionario: Funcionario;
  // @ts-ignore: Object is possibly 'undefined'.
  funcionarioId: number;

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit()  {

    this.funcionario = new Funcionario();
      this.funcionarioId = this.route.snapshot.params['id'];
  
      this.api.getFuncionarioById(this.funcionarioId)
        .subscribe(data => {
          console.log(data);
          this.funcionario = data;
        }, error => console.log(error));
  }


  deleteFuncionario(): void {
    this.api.deleteFuncionario(this.funcionarioId).subscribe(() => {
      this.router.navigate(["funcionario/list"]);
    });
  }

  cancel(): void {
    this.router.navigate(['funcionario/list']);
  }
}
