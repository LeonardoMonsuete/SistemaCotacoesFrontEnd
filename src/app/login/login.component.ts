import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export class UsuarioLogin {

  constructor(
    public login: string,
    public senha: string
  ){}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  configUrl = 'https://sistemas-cotacao-backend.herokuapp.com/usuarios/login';
  
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f : NgForm){
    console.log("chamou onsubmit");
      this.httpClient.post(this.configUrl, f.value)
      .subscribe((result) => {
        window.localStorage.setItem('autenticado', 'true');
        window.location.href = 'home';
        
      },
      (error) => {
        console.log(error.status);
        window.alert("Usuário e/ou senha incorretos !")
      }
      );
  }

}
