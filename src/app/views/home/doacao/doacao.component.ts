import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { loadStripe } from '@stripe/stripe-js';
import donations from './donations.json';
import { Doador } from 'src/app/doador.model';
import { Endereco } from 'src/app/endereco.model';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {
  title = 'Doar';
  donation: any = donations;
  private response: any;
  doador: Doador = new Doador();
  endereco: Endereco = new Endereco();
  submitted = false;

  constructor(private service: ApiService, private router: Router, private http: HttpClient,
    private maxLength: SharedDataService,  private cepService: SharedDataService) { }

  async triggerCreateCheckout(eventDonation: any) {
    this.response = await this.http
      .post('/.netlify/functions/createCheckout', eventDonation, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .toPromise();
    this.openStripe(this.response);
  }

  openStripe = async (stripeParams: any) => {
    const stripe = await loadStripe(stripeParams.publishableKey);
    const { error } = await stripe!.redirectToCheckout({
      sessionId: stripeParams.sessionId,
    });
  };

  ngOnInit() {
    this.maxLength.maxCaracteres();
  }

  newDoador(): void {
    this.submitted = false;
    this.doador = new Doador();
    this.endereco = new Endereco();

  }

  save() {
    this.service.createDoador(this.doador).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.doador = new Doador();
    this.gotoHome();
    this.doador.endereco = this.endereco;

    console.log(this.doador.endereco);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoHome() {
  this.router.navigate(['/home'])
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
