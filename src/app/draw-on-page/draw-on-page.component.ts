import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-draw-on-page',
  templateUrl: './draw-on-page.component.html',
  styleUrls: ['./draw-on-page.component.css']
})
export class DrawOnPageComponent {
  montoRetirado() {
    Swal.fire(
      'Retiro de monto exitoso',
      '',
      'success'
    )
   }
}
