import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { loadStripe } from '@stripe/stripe-js';
import donations from './donations.json';
import { Doador } from 'src/app/doador.model';
import { Endereco } from 'src/app/endereco.model';
import { SharedDataService } from 'src/app/shared-data.service';
import { FormBuilder } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import Swal from 'sweetalert2';

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
    private maxLength: SharedDataService,  private cepService: SharedDataService, 
    private formBuilder: FormBuilder, private decimalPipe: DecimalPipe) { }

  /*async triggerCreateCheckout(eventDonation: any) {
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
  };*/

  myForm = this.formBuilder.group({
    preco: '$0',
  });

  ngOnInit() {
    this.maxLength.maxCaracteres();

    /*this.myForm.valueChanges.subscribe((form) => {
      const formattedValue = this.getFormattedValue(form.preco);
      console.log(formattedValue);
      this.myForm.patchValue({ preco: formattedValue }, { emitEvent: false });
    });*/
  }

  getFormattedValue(value: any): string {
    const stringToTransform = String(value ?? '')
      .replace(/\D/g, '')
      .replace(/^0+/, '');
    return (
      '$' +
      this.decimalPipe.transform(
        stringToTransform === '' ? '0' : stringToTransform,
        '1.0'
      )
    );
  }

  //-----------------------------------------------------
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
  this.router.navigate(['/sucesso'])
  }
  //---------------------------------------------------

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

  popup(){
    Swal.fire({
      title: 'Deseja confimar o cadastro?',
      icon: 'question',
      confirmButtonColor: '#56c865',
      cancelButtonColor: '#d33',
      cancelButtonText:'Não',
      confirmButtonText: 'Sim',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          confirmButtonColor: '#56c865',
          text: 'Cadastro foi efetuado com sucesso',
          confirmButtonText: 'ok',
        })
        this.onSubmit() 
      }
    })
  }
}
