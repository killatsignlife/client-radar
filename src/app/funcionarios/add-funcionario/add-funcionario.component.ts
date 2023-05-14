import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Funcionario } from 'src/app/funcionario.model';
import { SharedDataService } from 'src/app/shared-data.service';
@Component({
  selector: 'app-add-funcionario',
  templateUrl: './add-funcionario.component.html',
  styleUrls: ['./add-funcionario.component.css']
})
export class AddFuncionarioComponent implements OnInit {

  title = 'Cadastrar';
  funcionario: Funcionario = new Funcionario();
  submitted = false;

  constructor(private service: ApiService, private router: Router, private maxLength: SharedDataService) { }

  newFuncionario(): void {
    this.submitted = false;
    this.funcionario = new Funcionario();
  }

  ngOnInit(): void {
    this.submitted = false;
    this.funcionario = new Funcionario();
    this.maxLength.maxCaracteres();
  }

  save() {
    console.log(this.funcionario);

    this.service.createFuncionario(this.funcionario).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.funcionario = new Funcionario();
    this.gotoAgradecimentos();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['funcionario/list'])
  }

  gotoAgradecimentos() {
    this.router.navigate(['/sucesso'])
  }

}
