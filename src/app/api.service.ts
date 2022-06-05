import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private desaparecidoUrl = 'https://pi-radar.herokuapp.com/api/v1/desaparecidos';
  private voluntarioUrl = 'https://pi-radar.herokuapp.com/api/v1/voluntarios';

  constructor(private http: HttpClient) { }

  getDesaparecidos() : Observable<any> {
    return this.http.get(`${this.desaparecidoUrl}`);
  }

  getDesaparecido(id: number) : Observable<any> {
    return this.http.get(`${this.desaparecidoUrl}/${id}`);
  }


  createVoluntario(voluntario: Object) : Observable<Object> {
    return this.http.post(`${this.voluntarioUrl}`, voluntario);
  }
}
