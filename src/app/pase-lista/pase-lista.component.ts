import { Component, OnInit } from '@angular/core';
import { ListasService, VulcanoService, GuardiasService } from '../services/index.services';
import swal from 'sweetalert2';

@Component({
  selector: 'app-pase-lista',
  templateUrl: './pase-lista.component.html',
  styleUrls: ['./pase-lista.component.css']
})
export class PaseListaComponent implements OnInit {

  fecha: Date;
  vulcanos: any = [];
  listas: any = [];

  paseListaHoyCompletado: Boolean;

  guardiaDelDia: any = {};

  loaderPaseLista = true;

  viewpaseLista = true;
  viewhistorial = false;

  constructor(
    public listasService: ListasService,
    public vulcanosService: VulcanoService,
    public guardiasService: GuardiasService
  ) {
    this.fecha = new Date();
    this.obtenerGuardiaHoy();
    this.obtenerListas();
    this.obtenerListaHoy();
  }

  reload() {
    this.obtenerListas();
    this.obtenerListaHoy();
    this.obtenerVulcanos();
  }

  obtenerVulcanos() {
    this.vulcanosService.getVulcanosByGuardia(this.guardiaDelDia)
      .then((vulcanos: any) => {
        this.vulcanos = vulcanos;
        this.loaderPaseLista = false;
      })
  }

  obtenerGuardiaHoy() {
    this.guardiasService.getGuardiaDia()
      .then((guardia: any) => {
        this.guardiaDelDia = guardia;
        setTimeout(() => {
          this.obtenerVulcanos();
        }, 2000);
      })
  }

  obtenerListaHoy() {
    this.listasService.getListaHoy()
      .then((response: any) => {
        if (response.mensaje === 'Encontrada') {
          this.paseListaHoyCompletado = true;
        } else {
          this.paseListaHoyCompletado = false;
        }
      })
  }

  obtenerListas() {
    this.listasService.getListas()
      .then((listas: any) => {
        console.log(listas);
        this.listas = listas;
      })
  }

  paseLista(vulcano: any, asistencia: any) {
    var datos = {
      vulcano: vulcano._id,
      asistencia: asistencia,
      guardia: this.guardiaDelDia._id
    }
    this.listasService.paseLista(datos)
      .then((response: any) => {

      })
  }

  paseListaCompleto() {
    swal.fire(
      'Pase Lista Completo!',
      'Se a registrado el pase de lista',
      'success'
    ).then(respuesta => {
      this.reload()
    })
  }

  activatepaseLista() {
    this.viewpaseLista = true;
    this.viewhistorial = false;
  }

  activatehistorial() {
    this.viewpaseLista = false;
    this.viewhistorial = true;
  }
  ngOnInit() {
  }

}
