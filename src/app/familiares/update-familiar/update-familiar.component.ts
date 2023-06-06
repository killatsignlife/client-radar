
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Familiar } from 'src/app/familiar.model';
import { SharedDataService } from 'src/app/shared-data.service';



@Component({
  selector: 'app-update-familiar',
  templateUrl: './update-familiar.component.html',
  styleUrls: ['./update-familiar.component.css','../../../styles.css']
})
export class UpdateFamiliarComponent implements OnInit {

  // @ts-ignore: Object is possibly 'undefined'.
  familiar: Familiar;
  // @ts-ignore: Object is possibly 'undefined'.
  familiarId: number;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router
    ,private maxLength: SharedDataService,  private cepService: SharedDataService) { }

  ngOnInit() {
    this.maxLength.maxCaracteres();
    this.familiar = new Familiar();
      this.familiarId = this.route.snapshot.params['id'];
  
      this.api.getFamiliarById(this.familiarId)
        .subscribe(data => {
          console.log(data);
          this.familiar = data;
        }, error => console.log(error));
  }

  updateFamiliar() {
    this.api.updateFamiliar(this.familiarId, this.familiar)
      .subscribe(data => console.log(data), error => console.log(error));
      this.familiar = new Familiar();

      this.router.navigate(['familiar/list']);
  }

  onSubmit() {
    this.updateFamiliar();
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
