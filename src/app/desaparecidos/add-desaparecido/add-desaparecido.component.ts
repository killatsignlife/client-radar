import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './../../model/image-handle.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Desaparecido } from 'src/app/desaparecido.model';
import { ɵunwrapSafeValue } from "@angular/core";
import { CepServiceService } from 'src/app/services/cep-service.service';

@Component({
  selector: 'app-add-desaparecido',
  templateUrl: './add-desaparecido.component.html',
  styleUrls: ['./add-desaparecido.component.css']
})

export class AddDesaparecidoComponent implements OnInit {

  title = 'Cadastrar';
  desaparecido: Desaparecido = new Desaparecido();
  submitted = false;

  constructor(private service: ApiService, private router: Router, private sanitizer: DomSanitizer,
    private cepService: CepServiceService) { }

  ngOnInit() {
  }

  newDesaparecido(): void {
    this.submitted = false;
    this.desaparecido = new Desaparecido();
  }

  save() {
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

  ImageSelected(event: any){
    if(event.target.files){
      const file = event.target.files.item(0);
      const fileUrl = this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file));

      const fileHandle: FileHandle = {
        file: file,
        url: fileUrl
      }

      let safeURL = ɵunwrapSafeValue(fileHandle.url);
  
      this.desaparecido.urlFotoPrincipal = [];

      this.desaparecido.urlFotoPrincipal?.push(safeURL);
   
      this.desaparecido.urlFotoPrincipal?.forEach(function(el) {
        console.log(el);
      })
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    return filterValue;
  }

  consultaCep(val, form){
    this.cepService.buscar(val).subscribe((dados) => this.populaForm(dados, form));
  }

  populaForm(dados, form){
    console.log(dados)
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade
    })
  }

}
