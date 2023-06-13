import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  users?: any[];
  password: string = '';
  isLogged?: Boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.http.get<any[]>('assets/data.json').subscribe(data => {
      this.users = data;
    });
  }

   login() {
    const user = this.users?.find(u => u.password === this.password);
    if(user) {
    this.isLogged = true;
      this.router.navigate(['/main']);
    } else {
      this.isLogged = false;
      this.badLogin();
    }
  }

  badLogin(){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ingrese un pin correcto",
    });
  }


}
