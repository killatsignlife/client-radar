import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Voluntario } from '../../../voluntario.model';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { loadStripe } from '@stripe/stripe-js';
import donations from './donations.json';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.scss']
})
export class DoacaoComponent implements OnInit {
  donation: any = donations;
  private response: any;
  voluntario: Voluntario = new Voluntario();
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
