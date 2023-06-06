import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Familiar } from 'src/app/familiar.model';
import { Desaparecido } from 'src/app/desaparecido.model';
import { SharedDataService } from 'src/app/shared-data.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-familiar',
  templateUrl: './add-familiar.component.html',
  styleUrls: ['./add-familiar.component.css','../../../styles.css']
})
export class AddFamiliarComponent implements OnInit {
  title = 'Cadastrar';
  familiar: Familiar = new Familiar();
  submitted = false;

  constructor(private service: ApiService, private router: Router, 
    private maxLength: SharedDataService, private cepService: SharedDataService) { }

  newFuncionario(): void {
    this.submitted = false;
    this.familiar = new Familiar();
  }

  ngOnInit(): void {
    this.submitted = false;
    this.familiar = new Familiar();
    this.maxLength.maxCaracteres();
  }

  save() {
    console.log(this.familiar);

    this.service.createFamiliar(this.familiar).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.familiar = new Familiar();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['familiar/list'])
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

  popup(){
    Swal.fire({
      title: 'Deseja confimar o cadastro?',
      icon: 'question',
      confirmButtonColor: '#56c865',
      cancelButtonColor: '#d33',
      cancelButtonText:'Não',
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
