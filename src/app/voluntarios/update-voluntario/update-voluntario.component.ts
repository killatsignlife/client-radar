import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { SharedDataService } from 'src/app/shared-data.service';
import { Voluntario } from 'src/app/voluntario.model';

@Component({
  selector: 'app-update-voluntario',
  templateUrl: './update-voluntario.component.html',
  styleUrls: ['./update-voluntario.component.css','../../../styles.css']
})
export class UpdateVoluntarioComponent implements OnInit {

  // @ts-ignore: Object is possibly 'undefined'.
  voluntario: Voluntario;
  // @ts-ignore: Object is possibly 'undefined'.
  voluntarioId: number;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router
    ,private maxLength: SharedDataService,  private cepService: SharedDataService) { }

  ngOnInit() {
    this.maxLength.maxCaracteres();
    this.voluntario = new Voluntario();
      this.voluntarioId = this.route.snapshot.params['id'];
  
      this.api.getVoluntarioById(this.voluntarioId)
        .subscribe(data => {
          console.log(data);
          this.voluntario = data;
        }, error => console.log(error));

  }

  updateVoluntario() {
    this.api.updateVoluntario(this.voluntarioId, this.voluntario)
      .subscribe(data => console.log(data), error => console.log(error));
      this.voluntario = new Voluntario();

      this.router.navigate(['/voluntarios']);
  }

  onSubmit() {
    this.updateVoluntario();
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
  }

}
