import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { VulcanoService, EstacionesService, GuardiasService, GradosService } from '../services/index.services';

@Component({
  selector: 'app-vulcanos',
  templateUrl: './vulcanos.component.html',
  styleUrls: ['./vulcanos.component.css']
})
export class VulcanosComponent implements OnInit {

  loaderCantidadVulcanos = true;
  loaderVulcanos = true;

  vulcano: any = {};
  vulcanoUpdate: any = {};
  vulcanos: any = [];
  estaciones: any = [];
  guardias: any = [];
  grados: any = [];
  totalVulcanos: number = 0;

  constructor(
    public vulcanosServices: VulcanoService,
    public estacionesService: EstacionesService,
    public guardiasService: GuardiasService,
    public gradosService: GradosService
  ) {
    this.reload();
  }

  totalGuardias() {
    this.totalVulcanos = 0;
    this.vulcanos.forEach(vulcano => {
      this.totalVulcanos++;
      this.guardias.forEach((guardia, i) => {
        if (guardia) {
          if (guardia.guardia == vulcano.guardia.guardia) {
            this.guardias[i].total++;
          }
          if (i === (this.guardias.length - 1)) {
            this.loaderCantidadVulcanos = false;
          }
        }
        
      })
    })
  }

  reload() {
    this.loaderCantidadVulcanos = true;
    this.loaderVulcanos = true;
    this.obtenerEstaciones();
    this.obtenerGrados();
    this.obtenerGuardias();
    this.obtenerVulcanos();

    this.vulcano.guardia = "Selecciona";
    this.vulcano.estacion = "Selecciona";
    this.vulcano.grado = "Selecciona";

    this.vulcanoUpdate.guardia = "Selecciona";
    this.vulcanoUpdate.estacion = "Selecciona";
    this.vulcanoUpdate.grado = "Selecciona";
  }

  obtenerVulcanos() {
    this.vulcanosServices.getVulcanos()
      .then((vulcanos: any) => {
        this.vulcanos = vulcanos;
        this.loaderVulcanos = false;
      })
  }

  obtenerGuardias() {
    this.guardiasService.getGuardias()
      .then((guardias: any) => {
        this.guardias = guardias;
        this.guardias.forEach((guardia, i) => {
          if (!guardia.total) {
            this.guardias[i].total = 0;
          }
        })
        setTimeout(() => {
          this.totalGuardias();
        }, 2000);
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

  obtenerGrados() {
    this.gradosService.getGrados().then((grados: any) => {
      this.grados = grados;
    }).catch(err => {
      console.log('Error getGrados():' + err);
    })
  }

  seleccionarVulcano(vulcano: any) {
    this.vulcanoUpdate = vulcano;
    this.vulcanoUpdate.guardia = vulcano.guardia._id;
    this.vulcanoUpdate.estacion = vulcano.estacion._id;
    this.vulcanoUpdate.grado = vulcano.grado._id;
  }

  eliminarVulcano(vulcano: any) {
    swal.fire({
      title: '¿Estás seguro/a de eliminar el vulcano "' + vulcano.nombre + '"?',
      text: "",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.value) {
        this.vulcanosServices.deleteVulcano(vulcano)
          .then((response: any) => {
            swal.fire(
              response.mensaje,
              'El vulcano ha sido borrado con éxito',
              'success'
            )
            this.reload();
          }, err => {
            console.log('Error ' + err)
          })
      }
    })
  }

  registrarVulcano() {
    this.vulcanosServices.createVulcano(this.vulcano)
      .then((response: any) => {
        swal.fire(
          response.mensaje,
          'El vulcano ha sido registrado con éxito',
          'success'
        )
        this.vulcano = {};
        this.reload();
      }, err => {
        swal.fire(
          err,
          "ERROR",
          "error"
        )
      })
  }

  updateVulcano() {
    this.vulcanosServices.updateVulcano(this.vulcanoUpdate)
      .then((response: any) => {
        swal.fire(
          response.mensaje,
          'El vulcano ha sido actualizado con éxito',
          'success'
        )
      }).catch(err => {
        swal.fire(
          'Vulcano NO Actualizado',
          err,
          'error'
        )
      })
  }

  ngOnInit() {
  }

}
