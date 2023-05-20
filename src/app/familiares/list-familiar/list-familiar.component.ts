import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Familiar } from 'src/app/familiar.model';

@Component({
  selector: 'app-list-familiar',
  templateUrl: './list-familiar.component.html',
  styleUrls: ['./list-familiar.component.css']
})
export class ListFamiliarComponent implements OnInit {

  // @ts-ignore: Object is possibly 'undefined'.
  familiares: Observable<Familiar[]>;

  displayedColumns: string[] = ['Nome', 'Sobrenome', 'CPF', 'Ações'];

 

 constructor(private api: ApiService, private router: Router) { }

 ngOnInit(): void {
   /*this.reloadData();*/
 }

 addFamiliar() {
   this.router.navigate(['familiar/adicionar']);
 }

 /*reloadData() {
   this.familiares = this.api.getFuncionario();
   console.log(this.familiares);
 }*/

 deletaFamiliar(id : number) {
   console.log(id);
   this.router.navigate(['familiar/deletar', id]);
 }

 atualizaFamiliar(id : number) {
   console.log(id);
   this.router.navigate(['familiar/atualizar', id])
 }

}
