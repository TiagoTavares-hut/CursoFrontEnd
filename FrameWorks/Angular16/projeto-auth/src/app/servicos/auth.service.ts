import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { map, Observable, switchMap, throwError } from 'rxjs';

//throwError é usado para lançar erros personalizados
// switchMap é usado para transformar o Observable retornado pela requisição HTTP

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3012/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';

  constructor(private router: Router, private http: HttpClient) { }

  // Metodos registrar
  registrar(usuario: any):Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      //pipe é uma busca de dados que retorna um array de usuários
      switchMap(res => {
        if(res.length>0){
          return throwError(()=>new Error ("Usuário Já Existe."));
        }
        return this.http.post<any>(this.apiUrl, usuario);
      }) // Verifica se o usuário já existe
    ); 
  }
  // Método para login
  // No login so precisamos do email e senha
  login(credenciais: any):Observable<boolean>{
    return this.http.get<any[]>(`${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
      map(usuario => {
        if (usuario.length > 0) { //stringify transforma o objeto em string
          localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuario[0]));
          return true; // Login bem-sucedido
        }
        return false; // Login falhou
      })
    );
  }

  // Método logout
  // logout remove o usuário logado do localStorage e redireciona para a página de login
  logout(){
    localStorage.removeItem(this.CHAVE_AUTH);
    this.router.navigate(["/login"]);
  }

  estaAutenticado(): boolean {
    return !!localStorage.getItem(this.CHAVE_AUTH);
  }

  usuarioLogado(): any {
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || '{}');
  }
  
}