import { Component } from '@angular/core';

interface User {
  first_name?: string;
  last_name?: string;
  // add other fields as needed
}

@Component({
  selector: 'app-registro-usuarios-screens',
  templateUrl: './registro-usuarios-screens.component.html',
  styleUrls: ['./registro-usuarios-screens.component.scss']
})
export class RegistroUsuariosScreensComponent {

  public user:any = {};
  public errors:any = {};
  public editar:boolean = false;
  public token: string = "";
  public idUser: Number = 0;

  login() {
    // placeholder submit handler
    console.log('login called', this.user);
  }

  //Para contraseñas
  public hide_1: boolean = false;
  public hide_2: boolean = false;
  public inputType_1: string = 'password';
  public inputType_2: string = 'password';

  public showPassword()
  {
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  // Función para los campos solo de datos alfabeticos
  public soloLetras(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    // Permitir solo letras (mayúsculas y minúsculas) y espacio
    if (
      !(charCode >= 65 && charCode <= 90) &&  // Letras mayúsculas
      !(charCode >= 97 && charCode <= 122) && // Letras minúsculas
      charCode !== 32                         // Espacio
    ) {
      event.preventDefault();
    }
  }


}
