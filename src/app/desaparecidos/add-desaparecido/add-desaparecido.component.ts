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

  constructor(private service: ApiService, private router: Router) { }

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

}
