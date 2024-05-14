import { Component, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css'
})
export class PrivadoComponent {
  servicio =inject(LoginService) 
  token: any;

  logaut(){
    localStorage.removeItem('token')
    if (this.token !== '') {
      localStorage.setItem('token','false');
      //this.router.navigate(['privado']); 

      window.location.href=('login')
    }
  }

}
