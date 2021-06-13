import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  @ViewChild('is_componente', { static: true}) is_componente: any;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.is_componente.nativeElement);
    
  }

}
