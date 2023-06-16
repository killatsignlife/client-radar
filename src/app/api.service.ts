import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Desaparecido } from './model/desaparecido.model';
import { Voluntario } from './voluntario.model';
import { Funcionario } from './funcionario.model';
import { Doador } from './doador.model';
import { Familiar } from './familiar.model';
import { Foto } from './foto.model';
import { FileDetails } from './desaparecidos/add-desaparecido/FileDetails';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private voluntarioUrl = 'http://localhost:8080/api/v1/voluntarios';
  private desaparecidoUrl = 'http://localhost:8080/api/v1/desaparecidos';
  private fotoUrl = 'http://localhost:8080/api/v1/desaparecido';
  private funcionarioUrl = 'http://localhost:8080/api/v1/funcionarios';
  private doadorUrl = 'http://localhost:8080/api/v1/doadores'
  private familiarUrl = 'http://localhost:8080/api/v1/familiares'

  constructor(private http: HttpClient) { }
    
  /*upload(file: File): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.desaparecidoUrl}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.desaparecidoUrl}`);
  }*/

  // Desaparecidos  
  createDesaparecido(desaparecido: Desaparecido): Observable<any> {

    return this.http.post(`${this.desaparecidoUrl}`, desaparecido);
  }

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.fotoUrl}/fotos`, formData);
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

   // Familiar
   createFamiliar(familiar: Familiar) : Observable<any> {
    return this.http.post(`${this.familiarUrl}`, familiar);
  }

  getFamiliarById(id: number) : Observable<any> {
    return this.http.get(`${this.familiarUrl}/${id}`);
  }

  updateFamiliar(id: number, familiar: Familiar) : Observable<any> {
    return this.http.put(`${this.familiarUrl}/${id}`, familiar);
  }

  getFamiliar(): Observable<any> {
    return this.http.get(`${this.familiarUrl}`);
  }

  deleteFamiliar(id: number) {
    return this.http.delete(`${this.familiarUrl}/${id}`);
  }
}
