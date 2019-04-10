import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

import { MandosService, ListasService, UnidadesService, GuardiasService } from '../services/index.services';

@Component({
  selector: 'app-mandos',
  templateUrl: './mandos.component.html',
  styleUrls: ['./mandos.component.css']
})
export class MandosComponent implements OnInit {

  mando: any = {};
  mandoUpdate: any = {};
  mandos: any = [];

  vulcanos: any = [];
  unidades: any = [];

  guardiaDelDia: any;

  paseListaCompleto = false;
  mandosAsignados = false;

  loaderMandos = true;
  constructor(
    public mandosService: MandosService,
    public listasService: ListasService,
    public unidadesService: UnidadesService,
    public guardiasService: GuardiasService
  ) {
    this.obtenerGuardiaHoy();
    this.obtenerMandosHoy();
  }

  obtenerGuardiaHoy() {
    this.guardiasService.getGuardiaDia()
      .then((guardia: any) => {
        this.guardiaDelDia = guardia;
        setTimeout(() => {
          this.obtenerListaHoy();
          this.obtenerUnidades();
        }, 2000);
      })
  }

  obtenerUnidades() {
    this.unidadesService.getUnidadesByGuardia(this.guardiaDelDia)
      .then((unidades: any) => {
        this.unidades = unidades;
      })
  }

  obtenerListaHoy() {
    this.listasService.getAsistenciasHoy()
      .then((lista: any) => {
        console.log("************************************")
        console.log(lista);
        if (lista) {
          lista.datosVulcano.forEach((vulcano) => {
            this.vulcanos.push(vulcano.vulcano);
          })
          this.paseListaCompleto = true;
        }
      })
  }

  completarAsignacion() {
    this.obtenerMandosHoy();
    swal.fire(
      'Mando Asignado',
      'Se ah asignado un vulcano al mando de una unidad',
      'success'
    )
  }

  obtenerMandosHoy() {
    this.mandosService.obtenerMandosHoy()
      .then((response: any) => {
        console.log(response);
        this.loaderMandos = false;
        this.mandosAsignados = (String(response.mensaje) === "Encontrado") ? true : false;
      })
  }

  asignarMandoUnidad(id_vulcano, id_unidad) {
    var data = {
      unidad: id_unidad,
      vulcano: id_vulcano
    }
    this.mandosService.createMandoUnidad(data)
      .then((response: any) => {
        console.log(response);
      })
  }

  ngOnInit() {
  }

}
