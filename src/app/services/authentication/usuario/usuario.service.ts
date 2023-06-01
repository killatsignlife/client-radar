import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

import { TokenService } from './../token/token.service';
import { UsuarioInfo } from './usuario-info';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<UsuarioInfo>({});

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificaJWT();
    }
   }

  private decodificaJWT(){
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as UsuarioInfo;
    this.usuarioSubject.next(usuario)
  }

  retornaUsuario(){
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token : string){
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.tokenService.excluiToken();
    this.usuarioSubject.next({})
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }
}
