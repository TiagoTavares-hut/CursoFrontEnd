import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root',
})
export class VagasService {
  private apiUrl = 'http://localhost:3011/vagas'; // endereso da api

  constructor(private http: HttpClient) {}

  //criar os metodos para conexao com a apiREST

  //get - obter a lista de vagas
  getVagas(): Observable<Vaga[]> {
    //observable -> rxjs => tradutor de Json -> typescript
    return this.http.get<Vaga[]>(this.apiUrl); //conecta com a API para pegar os dados
  }

  //post
  postVaga(vaga: Vaga): Observable<Vaga[]> {
    //metodo para enviar os dados para API
    return this.http.post<Vaga[]>(this.apiUrl, vaga);
    //Observable -> rxjs => tradutor de Json -> typescript
  }
  //put
  //nomeDoMetodo(parametros) // o Observable é o retorno da API
  putVaga(id: any, vaga: Vaga): Observable<Vaga[]> {//colecao chave -> valor
    //"http://localhost:3000/vagas"/"XXXX"
    const url = `${this.apiUrl}/${id}`; //constrói a URL com o ID da vaga
    // const url =this.apiUrl+"/"+id //outra forma de construir a URL
    return this.http.put<Vaga[]>(url, vaga);
  }

  //delete
  deleteVaga(id: any): Observable<Vaga[]>{
    const url = `${this.apiUrl}/${id}`; //constrói a URL com o ID da vaga
    return this.http.delete<Vaga[]>(url);
  }
}
