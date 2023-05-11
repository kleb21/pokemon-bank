import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  testSwal() {
    Swal.fire({
      title: 'Estas seguro de realizar el pago?',
      text: "Luego de esta confirmacion no se puede cancelar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar pago!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Pago exitoso!',
          '',
          'success'
        )
      }
    })
  }
}
