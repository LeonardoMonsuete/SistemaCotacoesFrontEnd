import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

export class ProdutosArray {
  constructor(
    public id: number,
    public nome: string,
    public medidas: string
  ){}
}

export class FornecedoresArray {
  constructor(
    public id: number,
    public nome: string,
    public email: string
  ){}
}

export class Usuarios {

  constructor(
    public nome: string
  ){}
}

export class Cotacao {

  constructor(
    public id: number,
    public produtos: ProdutosArray[] = [],
    public fornecedores: FornecedoresArray[] = [],
    public solicitante: Usuarios,
    public prazo: Date
  ){}
}

@Component({
  selector: 'app-detalhes-cotacao',
  templateUrl: './detalhes-cotacao.component.html',
  styleUrls: ['./detalhes-cotacao.component.scss']
})

export class DetalhesCotacaoComponent implements OnInit {
  cotacoes!: Cotacao;
  cotacoesUrl = 'https://sistemas-cotacao-backend.herokuapp.com/cotacoes/';
  id: number | undefined;
  private sub: any;
  
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
      this.sub = this.route.params.subscribe(params => {
      this.getCotacao(params.id)
   });
  }

  getCotacao(id_cotacao: number){
    this.httpClient.get<any>(this.cotacoesUrl+id_cotacao).subscribe(
      response => {
        //console.log(response);
        this.cotacoes = response;
      }
    );
  }

  onSubmit(f : NgForm){
    console.log(f.value);
    var id_fornecedor_ls = window.localStorage.getItem('cotacao_id_fornecedor');
    this.cotacoes.produtos.forEach(element => {
      var codigo_fornecedor = (<HTMLInputElement>document.getElementById('codigo_fornecedor'+element.id+id_fornecedor_ls)).value
      var valor = (<HTMLInputElement>document.getElementById('valor'+element.id+id_fornecedor_ls)).value
      var qtd_minima = (<HTMLInputElement>document.getElementById('qtd_minima'+element.id+id_fornecedor_ls)).value
      var porcentagem_imposto = (<HTMLInputElement>document.getElementById('porcentagem_imposto'+element.id+id_fornecedor_ls)).value

      var data = {
        produtoId: element.id,
        codigo_fornecedor: codigo_fornecedor,
        valor: valor,
        qtd_minima: qtd_minima,
        porcentagem_imposto: porcentagem_imposto
      }
      this.httpClient.post(this.cotacoesUrl+this.cotacoes.id+'/'+id_fornecedor_ls , data)
      .subscribe((result) => {
      });
    });
    
    window.alert("Enviado com sucesso!");
    // (<HTMLInputElement>document.getElementById('closeModal')).click();
  }

  saveIdLocaStorage(id_fornecedor: any){
    console.log(id_fornecedor);
    window.localStorage.setItem('cotacao_id_fornecedor', id_fornecedor);
  }

}
