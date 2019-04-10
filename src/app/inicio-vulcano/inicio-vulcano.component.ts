import { Component, OnInit } from '@angular/core';
import { AvisosService, VulcanoService } from '../services/index.services';
@Component({
  selector: 'app-inicio-vulcano',
  templateUrl: './inicio-vulcano.component.html',
  styleUrls: ['./inicio-vulcano.component.css']
})
export class InicioVulcanoComponent implements OnInit {

  vulcano: any = {};
  avisos: any = [];

  vulcanoMandoUnidad = {};
  unidadVulcano = {};

  comision = {};

  constructor(
    public avisosService: AvisosService,
    public vulcanoService: VulcanoService
  ) {
    this.vulcano = JSON.parse(window.localStorage.getItem('vulcano'));
    this.obtenerAvisosHoy();
    this.obtenerUnidad();
    this.obtenerComisiones();
  }

  obtenerUnidad() {
    console.log("Unidad vulcano")
    this.vulcanoService.obtenerUnidadVulcano(this.vulcano)
    .then((response: any)=> {
      console.log("Unidad vulcano")
      console.log(response); 
      this.unidadVulcano = response.unidad;
      this.obtenetVulcanoID(response.vulcano);
    })
  }

  obtenetVulcanoID(vulcano) {
    this.vulcanoService.getVulcanoByID(vulcano)
    .then((response: any) => {
      console.log(response);
      this.vulcanoMandoUnidad = response;
    })
  }

  obtenerComisiones() {
    this.vulcanoService.obtnercomisionVulcano(this.vulcano)
    .then((response: any)=>{
      console.log(response);
      if(String(response.mensaje) == "Encontrada") {
        this.comision = response.asignacion.comision;
      }
      
    })
  }

  obtenerAvisosHoy() {
    this.avisosService.getAvisosHoy()
      .then(response => {
        console.log(response);
        this.avisos = response;
      })
  }

  ngOnInit() {
  }

}
