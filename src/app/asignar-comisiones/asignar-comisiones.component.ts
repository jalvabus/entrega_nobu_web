import { Component, OnInit } from '@angular/core';
import { ComisionesService, VulcanoService, GuardiasService } from '../services/index.services';
import swal from 'sweetalert2';

@Component({
  selector: 'app-asignar-comisiones',
  templateUrl: './asignar-comisiones.component.html',
  styleUrls: ['./asignar-comisiones.component.css']
})
export class AsignarComisionesComponent implements OnInit {

  vulcanos: any = [];
  loaderComisiones = true;
  comisiones: any = [];

  guardiaDelDia: any = {};

  comisionesCompletadas: Boolean = false;

  fecha: Date = new Date();

  historial = false;
  
  constructor(
    public vulcanosService: VulcanoService,
    public guardiasService: GuardiasService,
    public comisionesService: ComisionesService
  ) { 
    this.reload()
  }

  ngOnInit() {
  }

  reload(){
    this.obtenerGuardiaHoy();
    this.obtenerComisionesHoy();
  }

  obtenerVulcanos() {
    this.vulcanosService.getVulcanosByGuardia(this.guardiaDelDia)
      .then((vulcanos: any) => {
        this.vulcanos = vulcanos;
        this.loaderComisiones = false;
      })
  }

  obtenerGuardiaHoy() {
    this.guardiasService.getGuardiaDia()
      .then((guardia: any) => {
        this.guardiaDelDia = guardia;
        setTimeout(() => {
          this.obtenerVulcanos();
          this.obtenerComisiones();
        }, 2000);
      })
  }

  obtenerComisiones(){
    this.comisionesService.getComisiones()
    .then((comisiones: any)=> {
      this.comisiones = comisiones;
    })
  }

  obtenerComisionesHoy() {
    this.comisionesService.getComisionesHoy()
      .then((response: any) => {
        console.log(response);
        if (response.mensaje === 'Encontrado') {
          this.comisionesCompletadas = true;
        } else {
          this.comisionesCompletadas = false;
        }
      })
  }

  guardarComisiones() {
    swal.fire(
      'Asignacion completada',
      'Se ah registrado la asignacion de unidades',
      'success'
    )
    this.obtenerComisionesHoy();
  }

  asignarComision(idComision, idVulcano) {
    var comision = {
      vulcano: idVulcano,
      comision: idComision
    }
    this.comisionesService.createComisionVulcano(comision)
    .then((comisiones: any)=> {
    })
  }
}
