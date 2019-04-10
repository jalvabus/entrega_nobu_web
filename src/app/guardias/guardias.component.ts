import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

import { GuardiasService } from '../services/index.services';

@Component({
  selector: 'app-guardias',
  templateUrl: './guardias.component.html',
  styleUrls: ['./guardias.component.css']
})
export class GuardiasComponent implements OnInit {

  guardia: any = {};
  guardias: any = [];
  guardiaUpdate: any = {};

  constructor(public guardiasService: GuardiasService) {
    this.obtenerGuardias();
  }

  obtenerGuardias() {
    this.guardiasService.getGuardias()
      .then((guardias: any) => {
        console.log(guardias);
        this.guardias = guardias;
      }, err => {
        swal.fire(err);
      })
  }

  registrarGuardia() {
    this.guardiasService.createGuardia(this.guardia)
      .then((response: any) => {
        swal.fire(
          response.mensaje,
          'La guardia ha sido registrada con éxito',
          'success'
        )
        this.guardia.guardia = '';
        this.guardias.push(response.guardia);
      }, err => {
        swal.fire(err);
      })
  }

  seleccionarGuardia(guardia: any) {
    this.guardiaUpdate = guardia;
  }

  actualizarGuardia() {
      this.guardiasService.updateGuardia(this.guardiaUpdate)
      .then((response: any)=>{
        swal.fire(
          response.mensaje,
          'La guardia ha sido actualizada con éxito',
          'success'
        )
      }, err => {
        swal.fire(err);
      })
  }

  eliminarGuardia(guardia: any) {
    swal.fire({
      title: '¿Estás seguro/a de eliminar la guardia "' + guardia.guardia + '"?',
      text: "",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.value) {
        this.guardiasService.deleteGuardia(guardia)
          .then((response: any) => {
            swal.fire(
              response.mensaje,
              'La guardia ha sido borrada con éxito',
              'success'
            )
            this.obtenerGuardias();
          }, err => {
            console.log('Error ' + err)
          })
      }
    })
  }

  ngOnInit() {
  }

}
