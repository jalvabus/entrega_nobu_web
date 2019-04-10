import { Component, OnInit } from '@angular/core';

import { ComisionesService } from '../services/index.services';

import swal from 'sweetalert2'

@Component({
  selector: 'app-comisiones',
  templateUrl: './comisiones.component.html',
  styleUrls: ['./comisiones.component.css']
})
export class ComisionesComponent implements OnInit {

  
  comisiones: any = [];
  form: any = {};
  comisionUpdate: any = {};

  constructor(
    private comisionesService: ComisionesService
  ) {
    this.obtenerComisiones();
    this.form = {
      comision: ''
    }
  }

  obtenerComisiones() {
    this.comisionesService.getComisiones().then((comisiones: any) => {
      this.comisiones = comisiones;
      console.log(comisiones);
    }).catch(err => {
      console.log('Error getcomisiones():' + err);
    })
  }

  registrarComision() {
    this.comisionesService.createComision(this.form)
      .then((response: any) => {
        swal.fire(
          'comision creada con éxito!',
          'La comision ha sido registrada con éxito',
          'success'
        )
        this.form.comision = '';
        this.comisiones.push(response.comision);
      })
  }

  seleccionarComision(comision: any) {
    this.comisionUpdate = comision;
  }

  actualizarComision() {
    this.comisionesService.updateComision(this.comisionUpdate)
      .then((response: any) => {
        swal.fire(
          response.mensaje,
          'La comision ha sido registrada con éxito',
          'success'
        )
        this.comisionUpdate.comision = '';
        this.obtenerComisiones();
      }, err => {

      })
  }

  elminarComision(comision: any) {
    swal.fire({
      title: '¿Estás seguro/a de eliminar la comision ' + comision.comision + '?',
      text: "",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.value) {
        this.comisionesService.deleteComision(comision)
          .then(response => {
            swal.fire(
              'Comision eliminada con éxito!',
              'La comision ha sido borrada con éxito',
              'success'
            )
            this.obtenerComisiones();
          }, err => {
            console.log('Error ' + err)
          })
      }
    })
  }

  ngOnInit() {
  }

}
