import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-deposit-page',
  templateUrl: './deposit-page.component.html',
  styleUrls: ['./deposit-page.component.css']
})
export class DepositPageComponent {
  monto?: number;
  userData: any;
  users: any[] = [];

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit() {
    this.http.get('assets/data.json').subscribe((data: any) => {
      this.users = data;
      if (this.users.length > 0) {
        this.userData = this.users[0];
      }
    });
  }

  montoIngresado() {
    if (this.monto) {
      this.userData.money += this.monto;
      this.router.navigate(['/main'], { state: { users: this.users } });
      console.log(this.router.navigate(['/main'], { state: { users: this.users } }))
      debugger
    }
  }
}
