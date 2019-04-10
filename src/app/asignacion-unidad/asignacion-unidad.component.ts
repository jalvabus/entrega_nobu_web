import { Component, OnInit } from '@angular/core';
import { UnidadesService, VulcanoService, GuardiasService } from '../services/index.services';
import swal from 'sweetalert2';

@Component({
  selector: 'app-asignacion-unidad',
  templateUrl: './asignacion-unidad.component.html',
  styleUrls: ['./asignacion-unidad.component.css']
})
export class AsignacionUnidadComponent implements OnInit {

  vulcanos: any = [];
  unidades: any = [];

  asignaciones: any = [];

  asignacionesCompletadas: boolean;

  guardiaDelDia: any = {};

  loaderAsignacion = true;

  fecha: Date = new Date();

  viewAsignacion = true;
  viewHistorial = false;

  activateasignacion() {
    this.viewAsignacion = true;
    this.viewHistorial = false;
  }

  activatehistorial() {
    this.viewAsignacion = false;
    this.viewHistorial = true;
  }
  
  constructor(
    public vulcanosService: VulcanoService,
    public unidadesService: UnidadesService,
    public guardiasService: GuardiasService
  ) {
    this.obtenerGuardiaHoy();
    this.obtenerAsignacionesHoy();
    this.obtenerAsignaciones();
  }

  obtenerVulcanos() {
    this.vulcanosService.getVulcanosByGuardia(this.guardiaDelDia)
      .then((vulcanos: any) => {
        this.vulcanos = vulcanos;
        this.loaderAsignacion = false;
      })
  }

  obtenerGuardiaHoy() {
    this.guardiasService.getGuardiaDia()
      .then((guardia: any) => {
        this.guardiaDelDia = guardia;
        setTimeout(() => {
          this.obtenerVulcanos();
          this.obtenerUnidades();
        }, 2000);
      })
  }

  reload() {
    this.obtenerAsignacionesHoy();
    this.obtenerAsignaciones();
    swal.fire(
      'Asignacion completada',
      'Se ah registrado la asignacion de unidades',
      'success'
    )
  }

  obtenerAsignacionesHoy() {
    this.unidadesService.getAsignacionesHoy()
      .then((response: any) => {
        if (response.mensaje === 'Encontrada') {
          this.asignacionesCompletadas = true;
        } else {
          this.asignacionesCompletadas = false;
        }
      })
  }

  obtenerUnidades() {
    this.unidadesService.getUnidadesByGuardia(this.guardiaDelDia)
      .then((unidades: any) => {
        this.unidades = unidades;
      })
  }

  asignarUnidad(id_unidad: any, id_vulcano: any) {
    var data = {
      vulcano: id_vulcano,
      unidad: id_unidad,
      guardia: this.guardiaDelDia._id
    }
    console.log(data);
    if (id_unidad === "Selecciona") {
      this.unidadesService.eliminarAsignacion(data)
        .then((response: any) => {
        })
    } else {
      this.unidadesService.asignarUnidad(data)
        .then((response: any) => {
        })
    }
  }

  obtenerAsignaciones() {
    this.unidadesService.getAsignacionesUnidades()
      .then((response: any) => {
        console.log("*********************");
        console.log(response);
        this.asignaciones = response;
      })
  }

  ngOnInit() {
  }

}
