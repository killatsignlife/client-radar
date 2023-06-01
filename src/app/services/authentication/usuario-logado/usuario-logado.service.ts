import { UsuarioLogado } from './../../../types/UsuarioLogado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoService {

  private readonly API = `${environment.api_url}/api/v1/usuarios/me`

  constructor(
    private httpClient: HttpClient
  ) {
  }

  retornaUsuarioLogado(): Observable<any> {
    return this.httpClient.get<UsuarioLogado>(this.API)
  }
}
