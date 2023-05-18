import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Desaparecido } from './desaparecido.model';
import { Voluntario } from './voluntario.model';
import { Funcionario } from './funcionario.model';
import { Doador } from './doador.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private voluntarioUrl = 'http://localhost:8080/api/v1/voluntarios';
  private desaparecidoUrl = 'http://localhost:8080/api/v1/desaparecidos';
  private funcionarioUrl = 'http://localhost:8080/api/v1/funcionarios';
  private doadorUrl = 'http://localhost:8080/api/v1/doador'
  
  constructor(private http: HttpClient) { }

  // Desaparecidos  
  createDesaparecido(desaparecido: Desaparecido): Observable<any> {
    return this.http.post(`${this.desaparecidoUrl}`, desaparecido);
  }

  getDesaparecidos() : Observable<any> {
    return this.http.get(`${this.desaparecidoUrl}`);
  }

  getDesaparecido(id: number) : Observable<any> {
    return this.http.get(`${this.desaparecidoUrl}/${id}`);
  }

  updateDesaparecido(id: number, desaparecido: Desaparecido) : Observable<any> {
    return this.http.put(`${this.desaparecidoUrl}/${id}`, desaparecido);
  }

  deleteDesaparecido(id: number) {
    return this.http.delete(`${this.desaparecidoUrl}/${id}`);
  }

  getDesaparecidosHome() {
    return this.http.get<Desaparecido[]>(`${this.desaparecidoUrl}`);
  }

  
  // Voluntarios
  createVoluntario(voluntario: Voluntario) : Observable<any> {
    return this.http.post(`${this.voluntarioUrl}`, voluntario);
  }

  getVoluntarios(): Observable<any> {
    return this.http.get(`${this.voluntarioUrl}`);
  }

  getVoluntarioById(id: number) : Observable<any> {
    return this.http.get(`${this.voluntarioUrl}/${id}`);
  }

  updateVoluntario(id: number, voluntario: Voluntario) : Observable<any> {
    return this.http.put(`${this.voluntarioUrl}/${id}`, voluntario);
  }

  deleteVoluntario(id: number) {
    return this.http.delete(`${this.voluntarioUrl}/${id}`);
  }

  // Funcionarios
  createFuncionario(funcionario: Funcionario) : Observable<any> {
    return this.http.post(`${this.funcionarioUrl}`, funcionario);
  }

  getFuncionario(): Observable<any> {
    return this.http.get(`${this.funcionarioUrl}`);
  }

  getFuncionarioById(id: number) : Observable<any> {
    return this.http.get(`${this.funcionarioUrl}/${id}`);
  }

  updateFuncionario(id: number, funcionario: Funcionario) : Observable<any> {
    return this.http.put(`${this.funcionarioUrl}/${id}`, funcionario);
  }

  deleteFuncionario(id: number) {
    return this.http.delete(`${this.funcionarioUrl}/${id}`);
  }

  // Mensagem
  createMensagem(id: number, mensagem: Object): Observable<Object> {
    return this.http.post(`${this.desaparecidoUrl}/${id}/mensagem`, mensagem);
  }

  createDoador(doador: Doador) : Observable<any> {
    return this.http.post(`${this.doadorUrl}`, doador);
  }

  getDoador(): Observable<any> {
    return this.http.get(`${this.doadorUrl}`);
  }
}
