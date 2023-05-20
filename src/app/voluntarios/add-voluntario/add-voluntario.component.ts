import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { SharedDataService } from 'src/app/shared-data.service';
import { Voluntario } from 'src/app/voluntario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-voluntario',
  templateUrl: './add-voluntario.component.html',
  styleUrls: ['./add-voluntario.component.css','../../../styles.css']
})
export class AddVoluntarioComponent implements OnInit {
    title = 'Cadastra-se';
    voluntario: Voluntario = new Voluntario();
    submitted = false;

  constructor(private service: ApiService, private router: Router, 
    private maxLength: SharedDataService,  private cepService: SharedDataService) { }

  ngOnInit(){
    this.maxLength.maxCaracteres();
  }

  newVoluntario():void{
    this.submitted = false;
    this.voluntario = new Voluntario();
  }

  save(){
    this.service.createVoluntario(this.voluntario).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.voluntario = new Voluntario();
    this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/voluntarios'])
  }

  gotoAgradecimentos(){
    this.router.navigate(['/sucesso'])
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
