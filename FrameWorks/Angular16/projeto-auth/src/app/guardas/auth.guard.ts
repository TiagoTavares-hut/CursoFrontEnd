import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../servicos/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// implementa a interface (class abstrata)
export class AuthGuard implements CanActivate  {
  // O AuthGuard é um serviço que implementa a interface CanActivate
  // O AuthGuard é usado para proteger rotas, garantindo que apenas usuários autenticados possam acessar determinadas páginas
  // Ele verifica se o usuário está autenticado antes de permitir o acesso à

  constructor (private authService: AuthService, private router: Router){}
  // canActivate é chamado antes de ativar uma rota
  // Se o usuário estiver autenticado, retorna true e permite o acesso à rota
  // Se não estiver autenticado, redireciona para a página de login e retorna
  canActivate():boolean{
    if(this.authService.estaAutenticado()){// Verifica se o usuário está autenticado
      return true;
    }
    this.router.navigate(["/login"]);// Redireciona para a página de login se não estiver autenticado
    return false;
  }
}


