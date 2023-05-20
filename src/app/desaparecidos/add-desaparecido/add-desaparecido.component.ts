import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './../../model/image-handle.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Desaparecido } from 'src/app/desaparecido.model';
import { ɵunwrapSafeValue } from "@angular/core";
import { Foto } from 'src/app/foto.model';
import { FormArray, FormBuilder } from '@angular/forms';
import { Endereco } from 'src/app/endereco.model';
import { SharedDataService } from 'src/app/shared-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-desaparecido',
  templateUrl: './add-desaparecido.component.html',
  styleUrls: ['./add-desaparecido.component.css','../../../styles.css']
})

export class AddDesaparecidoComponent implements OnInit {
  formRole = this.fb.group({
    roles: new FormArray([]),
  });
  title = 'Cadastrar';
  desaparecido: Desaparecido = new Desaparecido();
  endereco: Endereco = new Endereco();
  submitted = false;
  fotos: Foto = new Foto();

  constructor(private fb: FormBuilder, private service: ApiService, private router: Router, private sanitizer: DomSanitizer
    , private cepService: SharedDataService) { }

  roles = this.formRole.get('roles') as FormArray;

  addRoles() {
    this.roles.push(
      this.fb.group({
        role: '',
      })
    )
  }

  ngOnInit() {
  }

  newDesaparecido(): void {
    this.submitted = false;
    this.desaparecido = new Desaparecido();
    this.endereco = new Endereco();
  }

  removeDoFormArray(controls: FormArray, index: number) {
    controls.removeAt(index);
    this.desaparecido.fotos?.pop()?.charAt(index);
  }

  remove(index: number) {
    this.desaparecido.fotos?.pop()?.charAt(index);
  }

  save() {
    let arr: any[] = [];

    for(let value of this.roles.value) {
      console.log(value.role);
      arr.push(value.role);
    }

    console.log(arr);

    // for (let value of arr) {
    //   this.desaparecido.fotos?.push(value);
    // }
    this.desaparecido.fotos = arr;
    console.log(this.desaparecido.fotos);

    this.desaparecido.endereco = this.endereco;
    console.log(this.desaparecido.endereco);

    this.service.createDesaparecido(this.desaparecido).subscribe(

      data => console.log(data),
      error => console.log(error)
    );
    this.desaparecido = new Desaparecido();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/desaparecidos'])
  }

  gotoAgradecimentos() {
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
