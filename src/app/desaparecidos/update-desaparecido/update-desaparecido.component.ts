import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Desaparecido } from 'src/app/desaparecido.model';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-update-desaparecido',
  templateUrl: './update-desaparecido.component.html',
  styleUrls: ['./update-desaparecido.component.css','../../../styles.css']
})
export class UpdateDesaparecidoComponent implements OnInit {

  // @ts-ignore: Object is possibly 'undefined'.
  desaparecido: Desaparecido;
  // @ts-ignore: Object is possibly 'undefined'.
  desaparecidoId: number;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router
    ,private maxLength: SharedDataService,  private cepService: SharedDataService) { }

  ngOnInit() {
    this.maxLength.maxCaracteres();
    this.desaparecido = new Desaparecido();
      this.desaparecidoId = this.route.snapshot.params['id'];
  
      this.api.getDesaparecido(this.desaparecidoId)
        .subscribe(data => {
          console.log(data);
          this.desaparecido = data;
        }, error => console.log(error));

  }

  updateDesaparecido() {
    this.api.updateDesaparecido(this.desaparecidoId, this.desaparecido)
      .subscribe(data => console.log(data), error => console.log(error));
      this.desaparecido = new Desaparecido();

      this.router.navigate(['/desaparecidos']);
  }

  onSubmit() {
    this.updateDesaparecido();
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


}
