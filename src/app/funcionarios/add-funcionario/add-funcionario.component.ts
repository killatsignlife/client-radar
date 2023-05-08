import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Functionario } from 'src/app/funcionario.model';
@Component({
  selector: 'app-add-funcionario',
  templateUrl: './add-funcionario.component.html',
  styleUrls: ['./add-funcionario.component.css']
})
export class AddFuncionarioComponent implements OnInit {

  title = 'Cadastrar';
  funcionario: Functionario = new Functionario();
  submitted = false;

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.submitted = false;
    this.funcionario = new Functionario();
  }

  save() {
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

}
