import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  jsonData: any;
  users?: any[];
  userData: any;
  constructor(private http: HttpClient, private router: Router){}

  ngOnInit() {
    this.http.get('assets/data.json').subscribe((data: any) => {
      this.jsonData = data;
      this.users = this.jsonData.map((item: any) => {
        return {
          username: item.username,
          password: item.password,
          accountNumber: item.accountNumber,
          money: item.money
        };
      });
    });

    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['users']) {
      this.users = state['users'];
      if(this.users !== undefined) {
            if (this.users.length > 0) {
        this.userData = this.users[0];
      }
    } else {
      this.http.get('assets/data.json').subscribe((data: any) => {
        this.users = data;
        if(this.users !== undefined) {
            if (this.users.length > 0) {
          this.userData = this.users[0];
        }
        }

      });
    }
      }

  }

  confirmLogout() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres salir?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/login']);
      }
    });
  }
}
