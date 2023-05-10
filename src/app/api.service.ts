import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Desaparecido } from './model/desaparecido.model';

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

  // Desaparecidos  
  createDesaparecido(desaparecido: Object): Observable<Object> {
    return this.http.post(`${this.desaparecidoUrl}`, desaparecido);
  }

  getDesaparecidos() : Observable<any> {
    return this.http.get(`${this.desaparecidoUrl}`);
  }

  getDesaparecido(id: number) : Observable<any> {
    return this.http.get(`${this.desaparecidoUrl}/${id}`);
  }

  updateDesaparecido(id: number, desaparecido: Object) : Observable<any> {
    return this.http.put(`${this.desaparecidoUrl}/${id}`, desaparecido);
  }

  deleteDesaparecido(id: number) {
    return this.http.delete(`${this.desaparecidoUrl}/${id}`);
  }

  getDesaparecidosHome() {
    return this.http.get<Desaparecido[]>(`${this.desaparecidoUrl}`);
  }

  
  // Voluntarios
  createVoluntario(voluntario: Object) : Observable<Object> {
    return this.http.post(`${this.voluntarioUrl}`, voluntario);
  }

  getVoluntarios(): Observable<any> {
    return this.http.get(`${this.voluntarioUrl}`);
  }

  getVoluntarioById(id: number) : Observable<any> {
    return this.http.get(`${this.desaparecidoUrl}/${id}`);
  }

  updateVoluntario(id: number, voluntario: Object) : Observable<any> {
    return this.http.put(`${this.voluntarioUrl}/${id}`, voluntario);
  }

  deleteVoluntario(id: number) {
    return this.http.delete(`${this.voluntarioUrl}/${id}`);
  }

  // Mensagem
  createMensagem(id: number, mensagem: Object): Observable<Object> {
    return this.http.post(`${this.desaparecidoUrl}/${id}/mensagem`, mensagem);
  }
}
