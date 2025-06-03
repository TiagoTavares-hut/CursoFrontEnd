import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagasComponent } from './views/vagas/vagas.component';
import { HomeComponent } from './views/home/home.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component';

//crio as rotas de navegação da aplicação
const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"vagas", component: VagasComponent},
  {path:"curriculo", component: CurriculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
