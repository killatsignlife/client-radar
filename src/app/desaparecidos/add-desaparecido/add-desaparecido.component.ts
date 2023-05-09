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

@Component({
  selector: 'app-add-desaparecido',
  templateUrl: './add-desaparecido.component.html',
  styleUrls: ['./add-desaparecido.component.css']
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

  constructor(private fb: FormBuilder, private service: ApiService, private router: Router, private sanitizer: DomSanitizer) { }

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
    for (let value of this.roles.value) {
      console.log(value.role);
      this.desaparecido.fotos?.push(value.role);
    }

    this.desaparecido.endereco = this.endereco;
    console.log(this.desaparecido.endereco);

    this.service.createDesaparecido(this.desaparecido).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.desaparecido = new Desaparecido();
    this.gotoAgradecimentos();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoAgradecimentos() {
    this.router.navigate(['/sucesso'])
  }

}
