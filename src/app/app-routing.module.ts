import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { CotacoesComponent } from './cotacoes/cotacoes.component';
import { FinalizaCotacaoComponent } from './finaliza-cotacao/finaliza-cotacao.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'fornecedores', component: FornecedoresComponent },
  { path: 'finaliza-cotacao', component: FinalizaCotacaoComponent },
  { path: 'cria-cotacao', component: FinalizaCotacaoComponent },
  { path: 'cotacoes', component: CotacoesComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'principal', component: PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
