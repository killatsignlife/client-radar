import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor(private httpClient: HttpClient) { }
  
  maxCaracteres(){
    document.getElementById("CPF").setAttribute("maxLength","11") as any;
  }

  buscar(cep:String){
        return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

}
