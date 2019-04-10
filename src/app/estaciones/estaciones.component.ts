import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

import { EstacionesService } from '../services/index.services';

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.css']
})
export class EstacionesComponent implements OnInit {

  estacion: any = {};
  estaciones: any = [];
  estacionUpdate: any = {};

  constructor(public estacionesService: EstacionesService) {
    this.obtenerEstaciones();
  }

  obtenerEstaciones() {
    this.estacionesService.getEstaciones()
      .then((estaciones: any) => {
        this.estaciones = estaciones;
      }).catch(err => {
        swal.fire(err);
      })
  }
  registrarEstacion() {
    this.estacionesService.createEstacion(this.estacion)
      .then((response: any) => {
        swal.fire(
          response.mensaje,
          'La estacion ha sido registrada con éxito',
          'success'
        )
        this.estacion.estacion = '';
        this.estacion.direccion = '';
        this.estaciones.push(response.estacion);
      })
  }

  seleccionarEstacion(estacion: any) {
    this.estacionUpdate = estacion;
  }

  eliminarEstacion(estacion: any) {
    swal.fire({
      title: '¿Estás seguro/a de eliminar la estacion "' + estacion.estacion + '"?',
      text: "",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.value) {
        this.estacionesService.deleteEstacion(estacion)
          .then((response: any) => {
            swal.fire(
              response.mensaje,
              'La estacion ha sido borrada con éxito',
              'success'
            )
            this.obtenerEstaciones();
          }, err => {
            console.log('Error ' + err)
          })
      }
    })
  }

  actualozarEstacion() {
    this.estacionesService.updateEstacion(this.estacionUpdate)
      .then((response: any) => {
        swal.fire(
          response.mensaje,
          'La estacion ha sido actualizada con éxito',
          'success'
        )
      }, err => {
        console.log('Error ' + err)
      })
  }

  ngOnInit() {
  }

}
