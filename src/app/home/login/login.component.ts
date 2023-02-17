import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    usuario = '';
    senha = '';

    login(){
      console.log(this.usuario, this.senha);
    }
}
