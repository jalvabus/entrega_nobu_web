import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert2';

import { UnidadesService, EstacionesService, GuardiasService } from '../services/index.services';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {

  unidad: any = {};
  unidadUpdate: any = {};
  unidades: any = [];

  guardias: any = [];
  estaciones: any = [];

  loaderUnidades = true;

  constructor(
    public unidadesService: UnidadesService,
    public estacionesService: EstacionesService,
    public guardiasService: GuardiasService
  ) {
    this.reload();
  }

  reload() {
    this.obtenerEstaciones();
    this.obtenerGuardias();
    this.obtenerUnidades();
    this.unidad.estacion = "Selecciona";
    this.unidad.guardia = "Selecciona";
  }

  obtenerUnidades() {
    this.unidadesService.getUnidades()
      .then((unidades: any) => {
        this.unidades = unidades;
        this.loaderUnidades = false;
      }, err => {
        swal.fire(err);
      })
  }

  obtenerGuardias() {
    this.guardiasService.getGuardias()
      .then((guardias: any) => {
        this.guardias = guardias;
      }, err => {
        swal.fire(err);
      })
  }

  obtenerEstaciones() {
    this.estacionesService.getEstaciones()
      .then((estaciones: any) => {
        this.estaciones = estaciones;
      }).catch(err => {
        swal.fire(err);
      })
  }

  registrarUnidad() {
    this.unidadesService.createUnidad(this.unidad)
    .then((response: any) => {
      swal.fire(
        response.mensaje,
        'La unidad ha sido registrada con éxito',
        'success'
      )
      this.unidad = {};
      this.reload();
    },err => {
      swal.fire(err);
    })
  }

  seleccionarUnidad(unidad: any){
    this.unidadUpdate = unidad;
    this.unidadUpdate.estacion = unidad.estacion._id;
    this.unidadUpdate.guardia = unidad.guardia._id;
  }

  eliminarUnidad(unidad: any) {
    swal.fire({
      title: '¿Estás seguro/a de eliminar la unidad con placa "' + unidad.placa + '"?',
      text: "",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.value) {
        this.unidadesService.deleteUnidad(unidad)
          .then((response: any) => {
            swal.fire(
              response.mensaje,
              'La unidad ha sido borrada con éxito',
              'success'
            )
            this.reload();
          }, err => {
            console.log('Error ' + err)
          })
      }
    })
  }

  actualizarGuardia() {
    this.unidadesService.updateUnidad(this.unidadUpdate)
    .then((response: any) => {
      swal.fire(
        response.mensaje,
        'La unidad ha sido actualizada con éxito',
        'success'
      )
      this.reload();
    })
  }

  ngOnInit() {
  }

}
