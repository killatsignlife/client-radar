import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './../../model/image-handle.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Desaparecido } from 'src/app/desaparecido.model';

@Component({
  selector: 'app-add-desaparecido',
  templateUrl: './add-desaparecido.component.html',
  styleUrls: ['./add-desaparecido.component.css']
})

export class AddDesaparecidoComponent implements OnInit {

  title = 'Cadastrar';
  desaparecido: Desaparecido = new Desaparecido();
  submitted = false;

  constructor(private service: ApiService, private router: Router, private sanitizer: DomSanitizer) { }

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

  ImageSelected(event){
    if(event.target.files){
      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      
      this.desaparecido.urlFotoPrincipal.push(fileHandle);

    }
  }

}
