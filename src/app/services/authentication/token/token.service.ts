import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  retornaToken(){
    return sessionStorage.getItem(KEY) ?? "";
  }

  salvaToken(token : string){
    sessionStorage.setItem(KEY, token);
  }

  excluiToken(){
    sessionStorage.removeItem(KEY);
  }

  possuiToken(){
    return !!this.retornaToken();
  }
}
