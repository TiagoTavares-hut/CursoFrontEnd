import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templete/header/header.component';
import { FooterComponent } from './templete/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ProdutosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
