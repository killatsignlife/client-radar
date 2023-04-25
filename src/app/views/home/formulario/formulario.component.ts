import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Voluntario } from 'src/app/voluntario.model';
import { Router } from '@angular/router';

//---------------------------------------------------------------------------

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

//----------------------------------------------------------------------------

export class FormularioComponent implements OnInit {
  title = 'Cadastra-se';
  voluntario: Voluntario = new Voluntario();
  submitted = false;

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit() {
  }

  newVoluntario(): void {
    this.submitted = false;
    this.voluntario = new Voluntario();
  }

  save() {
    this.service.createVoluntario(this.voluntario).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.voluntario = new Voluntario();
    this.gotoAgradecimentos();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoAgradecimentos() {
    this.router.navigate(['/agradecimento'])
  }
}
