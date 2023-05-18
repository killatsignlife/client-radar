import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { loadStripe } from '@stripe/stripe-js';
import donations from './donations.json';
import { Doador } from 'src/app/doador.model';

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
  submitted = false;

  constructor(private service: ApiService, private router: Router, private http: HttpClient) { }

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
  }

  newDoador(): void {
    this.submitted = false;
    this.doador = new Doador();
  }

  save() {
    this.service.createDoador(this.doador).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.doador = new Doador();
    this.gotoHome();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoHome() {
    this.router.navigate(['/'])
  }
}
