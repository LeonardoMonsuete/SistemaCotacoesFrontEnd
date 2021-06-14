import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

export class ProdutosArray {
  constructor(
    id: number,
    quantidade: number
  ){}
}

export class FornecedoresArray {
  constructor(
    id: number
  ){}
}

export class Cotacao {

  constructor(
    public id: number,
    public produtos: ProdutosArray[],
    public fornecedores: FornecedoresArray[],
    public solicitanteId: number,
    public prazo: Date
  ){}
}

export class Produto {

  constructor(
    public id: number,
    public nome: string,
    public medidas: string,
    public produtoPaiId:number
  ){}
}

export class Fornecedor {

  constructor(
    public id: number,
    public nome: string,
    public cnpj: string,
    public email: string,
    public telefone: string
  ){}
}

export class Usuarios {

  constructor(
    public id: number,
    public nome: string,
    public cargo: string
  ){}
}


@Component({
  selector: 'app-cotacoes',
  templateUrl: './cotacoes.component.html',
  styleUrls: ['./cotacoes.component.scss']
})
export class CotacoesComponent implements OnInit {

  cotacoes: Cotacao[] = [];
  produtos: Produto[] = [];
  fornecedores: Fornecedor[] = [];
  usuarios: Usuarios[] = [];
  fornecedoresUrl = 'https://sistemas-cotacao-backend.herokuapp.com/fornecedores';
  produtosUrl = 'https://sistemas-cotacao-backend.herokuapp.com/produtos';
  cotacoesUrl = 'https://sistemas-cotacao-backend.herokuapp.com/cotacoes';
  usuariosUrl = 'https://sistemas-cotacao-backend.herokuapp.com/usuarios';

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.checkIsAuth();
    this.getFornecedores();
    this.getProdutos();
    this.getCotacoes();
    this.getUsuarios();
  }

  
  getCotacoes(){
    this.httpClient.get<any>(this.cotacoesUrl).subscribe(
      response => {
        response.forEach((element: { prazo: string | number | Date; }) => {
          var prazoU = new Date(element.prazo)
          element.prazo = prazoU.toLocaleDateString();
        });
        this.cotacoes = response;
      }
    );
  }
  getProdutos(){
    this.httpClient.get<any>(this.produtosUrl).subscribe(
      response => {
        this.produtos = response;
      }
    );
  }

  getFornecedores(){
    this.httpClient.get<any>(this.fornecedoresUrl).subscribe(
      response => {
        this.fornecedores = response;
      }
    );
  }

  getUsuarios(){
    this.httpClient.get<any>(this.usuariosUrl).subscribe(
      response => {
        this.usuarios = response;
      }
    );
  }

  onSubmit(f : NgForm){
    let produtos_obj: { id: number; quantidade: number; }[] = []
    let fornecedores_obj: { id: number; }[] = []
    
    f.value.produtos.forEach((element: any) => {
      produtos_obj.push({
        id : element,
        quantidade: 1
      })
    });

    f.value.produtos.forEach((element: any) => {
      fornecedores_obj.push({
        id : element
      })
    });

    this.httpClient.post(this.cotacoesUrl, {
      prazo: f.value.prazo, 
      solicitanteId: f.value.solicitanteId, 
      produtos: produtos_obj,
      fornecedores: fornecedores_obj
    }).subscribe((result) => {
      this.resetUserForm(f); //reload the table
    });
  }

  resetUserForm(userForm: NgForm) {
    userForm.resetForm();
    this.ngOnInit();
  }

  checkIsAuth(){
    if(!window.localStorage.getItem('autenticado')){
      window.location.href = 'login';
    }
  }

  detalhaCotacao(id_cotacao: any){
    window.location.href = "cotacoes/"+id_cotacao;
  }



}
