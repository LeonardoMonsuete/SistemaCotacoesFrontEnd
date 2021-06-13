import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export class Usuario {

  constructor(
    public id: number,
    public nome: string,
    public cargo: string,
    public login: string,
    public senha: string
  ){}
}


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  configUrl = 'https://sistemas-cotacao-backend.herokuapp.com/usuarios';

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.checkIsAuth();
    this.getUsuarios();
  }

  getUsuarios(){
    this.httpClient.get<any>(this.configUrl).subscribe(
      response => {
        // console.log(response);
        this.usuarios = response;
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
  
  checkIsAuth(){
    if(!window.localStorage.getItem('autenticado')){
      window.location.href = 'login';
    }
  }

}
