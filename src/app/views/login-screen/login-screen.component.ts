import { Component } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {

  /** Datos del formulario */
  public username:string = "";
  public password:string = "";
  public type: string = "password";
  public errors:any = {};
  public load:boolean = false;

  ngOnInit(): void {
  }

  login() {
    // Implementar funciones paras login
  }

  public showPassword(){
    this.type = this.type === "password" ? "text" : "password";
  }
}
