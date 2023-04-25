import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Desaparecido } from './desaparecido.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //private desaparecidoUrl = 'https://pi-radar.herokuapp.com/api/v1/desaparecidos';
  //private desaparecidoUrl = 'https://radar-hsjh.onrender.com/api/v1/desaparecidos';
  //private voluntarioUrl = 'https://pi-radar.herokuapp.com/api/v1/voluntarios';
  //private voluntarioUrl = 'https://radar-hsjh.onrender.com/api/v1/voluntarios';
  private voluntarioUrl = 'http://localhost:5000/api/v1/voluntarios';
  private desaparecidoUrl = 'http://localhost:5000/api/v1/desaparecidos';

  constructor(private http: HttpClient) { }

  getDesaparecidos() : Observable<any> {
    return this.http.get(`${this.desaparecidoUrl}`);
  }

  getDesaparecidosHome() {
    return this.http.get<Desaparecido[]>(`${this.desaparecidoUrl}`);
  }

  getDesaparecido(id: number) : Observable<any> {
    return this.http.get(`${this.desaparecidoUrl}/${id}`);
  }


  createVoluntario(voluntario: Object) : Observable<Object> {
    return this.http.post(`${this.voluntarioUrl}`, voluntario);
  }

  createMensagem(id: number, mensagem: Object): Observable<Object> {
    return this.http.post(`${this.desaparecidoUrl}/${id}/mensagem`, mensagem);
  }
}
