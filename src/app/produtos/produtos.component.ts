import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Produto {

  constructor(
    public id: number,
    public nome: string,
    public medidas: string,
    public produtoPaiId:number
  ){}
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  //@ViewChild('is_componente', { static: true}) is_componente: any;

  produtos: Produto[] = [];
  configUrl = 'https://sistemas-cotacao-backend.herokuapp.com/produtos';

  constructor(
    private httpClient: HttpClient
    ) { }

  ngOnInit(): void {
    this.getProdutos();
  }


  getProdutos(){
    this.httpClient.get<any>(this.configUrl).subscribe(
      response => {
        // console.log(response);
        this.produtos = response;
      }
    );
  }

  onSubmit(f : NgForm){
    //console.log(f.value);
    this.httpClient.post(this.configUrl, f.value)
    .subscribe((result) => {
      this.ngOnInit(); //reload the table
    });
  }

}
