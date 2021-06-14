import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkIsAuth(): boolean{
    if(!window.localStorage.getItem('autenticado')){
      return false;
    }
    return true;
  }

  logout(){
    window.localStorage.removeItem('autenticado');
    window.location.href = 'login';
  }

}
