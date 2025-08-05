import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../servicos/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate  {

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


