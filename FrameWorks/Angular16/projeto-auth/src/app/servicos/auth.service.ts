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
    //antes de registrar  -> verificar se usuário já esta cadastrado
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      //pipe é uma busca de dados que retorna um array de usuários
      switchMap(res => {
        if(res.length>0){
          // criando um erro para o sistema -> para que o erro seja tratado, rodar a função dentro de um try/catch
          return throwError(()=>new Error ("Usuário Já Existe."));
        }
        return this.http.post<any>(this.apiUrl, usuario);
      }) // Verifica se o usuário já existe
    ); 
  }
  // Método para login
  // No login so precisamos do email e senha
  login(credenciais: any):Observable<boolean>{
    //passar o email e senha para procurar o usuario no bonco de dados
    return this.http.get<any[]>(`${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
      map(usuario => {
        if (usuario.length > 0) { //stringify transforma o objeto em string
          //localStorage grava no aramazenamento interno do navegador(a chave de autenticacao e as informações do usuario)
          localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuario[0]));
          return true; // Login bem-sucedido
        }
        return false; // //caso não seja encontrado -> retorna falso
      })
    );
  }

  // Método logout
  // logout remove o usuário logado do localStorage e redireciona para a página de login
  logout(){
    localStorage.removeItem(this.CHAVE_AUTH);
    this.router.navigate(["/login"]);
  }
  // Método para verificar se o usuário está autenticado
  estaAutenticado(): boolean {
    //uso de dupla negação (!!) para converter o valor de localStorage em um booleano
    //!! -> se retornar vazio -> falso, agora retornar texto -> verdadeiro
    return !!localStorage.getItem(this.CHAVE_AUTH);
  }
  // Método para obter o usuário logado
  usuarioLogado(): any {
    //converte para json as informacoes do usuario logado
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || '{}');
  }
  
}