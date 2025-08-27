import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InternaComponent } from './componentes/interna/interna.component';
import { AuthGuard } from './guardas/auth.guard';

// as pats é a rota raiz do aplicativo
// O RouterModule é usado para configurar as rotas do aplicativo
const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  // A rota interna é protegida pelo AuthGuard, que verifica se o usuário está autenticado
  //praticamente ele impede a pessoa de acessar
  {path: "interna", component: InternaComponent, canActivate: [AuthGuard]},
  {path: "", redirectTo: "home"}, // Redireciona a rota raiz para a rota home
  {path: "**", redirectTo: "home"} // Redireciona qualquer rota desconhecida para a rota home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 