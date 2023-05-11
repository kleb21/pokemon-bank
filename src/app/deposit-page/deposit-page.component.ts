import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposit-page',
  templateUrl: './deposit-page.component.html',
  styleUrls: ['./deposit-page.component.css']
})
export class DepositPageComponent {


  montoIngresado() {
    Swal.fire(
      'Monto Ingresado Exitosamente',
      '',
      'success'
    )
  }

}
