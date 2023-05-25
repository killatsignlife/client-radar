import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Endereco } from 'src/app/endereco.model';
import { Funcionario } from 'src/app/funcionario.model';
import { SharedDataService } from 'src/app/shared-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-funcionario',
  templateUrl: './add-funcionario.component.html',
  styleUrls: ['./add-funcionario.component.css']
})
export class AddFuncionarioComponent implements OnInit {

  title = 'Cadastrar';
  funcionario: Funcionario = new Funcionario();
  enderecoF: Endereco = new Endereco();
  submitted = false;

  constructor(private service: ApiService, private router: Router,
    private maxLength: SharedDataService, private cepService: SharedDataService) { }

  //--------------------------------------------------------------------
  newFuncionario(): void {
    this.submitted = false;
    this.funcionario = new Funcionario();
    this.enderecoF = new Endereco();
  }

  ngOnInit(){
    this.maxLength.maxCaracteres();
  }

  save() {
    this.funcionario.enderecoF = this.enderecoF;
    console.log(this.funcionario);
    this.service.createFuncionario(this.funcionario).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.funcionario = new Funcionario();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['funcionario/list'])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    return filterValue;
  }

  consultaCep(val, form) {
    this.cepService.buscar(val).subscribe((dados) => this.populaForm(dados, form));
  }

  populaForm(dados, form) {
    form.controls['cidade'].setValue(dados.localidade)
    form.controls['bairro'].setValue(dados.bairro)
    form.controls['logradouro'].setValue(dados.logradouro)
    form.controls['uf'].setValue(dados.uf)
  }

  popup() {
    Swal.fire({
      title: 'Deseja confimar o cadastro?',
      icon: 'question',
      confirmButtonColor: '#56c865',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          confirmButtonColor: '#56c865',
          text: 'Cadastro foi efetuado com sucesso',
          confirmButtonText: 'ok',
        })
        this.onSubmit()
      }
    })
  }
}
