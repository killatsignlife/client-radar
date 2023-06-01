import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly API = `${environment.api_url}/api/v1/usuarios/signIn`
  
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
    ) {}

  autentica(email: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(this.API, {
      login: email,
      password: senha,
    },
    { observe: 'response'}
    )
    .pipe(
      tap((res) =>{
       //console.log(JSON.stringify(res.body).split('"')[3]);
        const authToken = JSON.stringify(res.body).split('"')[3] ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    )
  }
}

