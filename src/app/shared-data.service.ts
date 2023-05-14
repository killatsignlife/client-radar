import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
  maxCaracteres(){
    document.getElementById("CPF").setAttribute("maxLength","11") as any;
  }
}
