import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Funcionario } from 'src/app/funcionario.model';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.css','../../../styles.css']
})
export class EditFuncionarioComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  funcionario: Funcionario;
  // @ts-ignore: Object is possibly 'undefined'.
  funcionarioId: number;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router
    ,private maxLength: SharedDataService,  private cepService: SharedDataService) { }

  ngOnInit() {
    this.maxLength.maxCaracteres();
    this.funcionario = new Funcionario();
      this.funcionarioId = this.route.snapshot.params['id'];
  
      this.api.getFuncionarioById(this.funcionarioId)
        .subscribe(data => {
          console.log(data);
          this.funcionario = data;
        }, error => console.log(error));
  }

  updateFuncionario() {
    this.api.updateFuncionario(this.funcionarioId, this.funcionario)
      .subscribe(data => console.log(data), error => console.log(error));
      this.funcionario = new Funcionario();

      this.router.navigate(['funcionario/list']);
  }

  onSubmit() {
    this.updateFuncionario();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    return filterValue;
  }

  consultaCep(val, form){
    this.cepService.buscar(val).subscribe((dados) => this.populaForm(dados, form));
  }

  populaForm(dados, form){
    form.controls['cidade'].setValue(dados.localidade)
    form.controls['bairro'].setValue(dados.bairro)
    form.controls['logradouro'].setValue(dados.logradouro)
    form.controls['uf'].setValue(dados.uf)
  }
}
