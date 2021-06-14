import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CotacoesComponent } from './cotacoes/cotacoes.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { CriaCotacaoComponent } from './cria-cotacao/cria-cotacao.component';
import { FinalizaCotacaoComponent } from './finaliza-cotacao/finaliza-cotacao.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContatoComponent } from './contato/contato.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { UsuariosComponent} from './usuarios/usuarios.component';
import { HttpClientModule} from '@angular/common/http';
import { DetalhesCotacaoComponent } from './detalhes-cotacao/detalhes-cotacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CotacoesComponent,
    FornecedoresComponent,
    CriaCotacaoComponent,
    FinalizaCotacaoComponent,
    NavbarComponent,
    ContatoComponent,
    PrincipalComponent,
    ProdutosComponent,
    UsuariosComponent,
    DetalhesCotacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
