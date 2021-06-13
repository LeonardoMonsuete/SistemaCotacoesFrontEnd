import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export class Fornecedor {

  constructor(
    public id: number,
    public nome: string,
    public cnpj: string,
    public email: string,
    public telefone: string
  ){}
}

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent implements OnInit {

  
  fornecedores: Fornecedor[] = [];
  configUrl = 'https://sistemas-cotacao-backend.herokuapp.com/fornecedores';

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getFornecedores();
  }

  getFornecedores(){
    this.httpClient.get<any>(this.configUrl).subscribe(
      response => {
        // console.log(response);
        this.fornecedores = response;
      }
    );
  }

  onSubmit(f : NgForm){
    //console.log(f.value);
    this.httpClient.post(this.configUrl, f.value)
    .subscribe((result) => {
      this.resetUserForm(f); //reload the table
    });
  }

  resetUserForm(userForm: NgForm) {
    userForm.resetForm();
    this.ngOnInit();
  } 

}
 