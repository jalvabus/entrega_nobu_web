import { Component, OnInit } from '@angular/core';
import { AvisosService, VulcanoService, PartesService, GuardiasService } from '../services/index.services';

import swal from 'sweetalert2'

@Component({
  selector: 'app-parte-informativo',
  templateUrl: './parte-informativo.component.html',
  styleUrls: ['./parte-informativo.component.css']
})
export class ParteInformativoComponent implements OnInit {
  cargando = false;

  vulcano: any = {};

  vulcanoMandoUnidad = {};
  unidadVulcano = {};

  guardiaDelDia = {};

  reporte = {};

  constructor(
    public partesService: PartesService,
    public avisosService: AvisosService,
    public vulcanoService: VulcanoService,
    public guardiasService: GuardiasService
  ) {
    this.vulcano = JSON.parse(window.localStorage.getItem('vulcano'));
    this.obtenerGuardiaHoy();
    setTimeout(()=> {
      this.obtenerUnidad();
    }, 2000)  ;


  }
  
  obtenerGuardiaHoy() {
    this.guardiasService.getGuardiaDia()
      .then((guardia: any) => {
        this.guardiaDelDia = guardia;
      })
  }

  obtenerUnidad() {
    console.log("Unidad vulcano")
    this.vulcanoService.obtenerUnidadVulcano(this.vulcano)
      .then((response: any) => {
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

  ngOnInit() {
  }

  generarReporte() {
    
    console.log(this.reporte);
    var data = {
      reporte: this.reporte,
      guardia: this.guardiaDelDia,
      vulcanoMandoUnidad: this.vulcanoMandoUnidad,
      unidad: this.unidadVulcano,
      vulcanoReporta: this.vulcano
    };

    this.cargando = true;
    this.partesService.generarReporte(data)
      .then((response: any) => {
        this.cargando = false;
        swal.fire(
          'Reporte creado !',
          'El reporte ha sido registrado con éxito',
          'success'
        )
        this.reporte = {};
        console.log(response)
      })
      .catch((err) => {
        this.cargando = false;
        console.log(err)
      })
  }

  /*
  generarReporte() {
    
    console.log(this.reporte);
    var data = this.reporte;

    this.cargando = true;
    this.partesService.generarReporte(data)
      .then((file: any) => {
        console.log(file)
        window.open(file.url, '_blank')
        this.cargando = false;
      })
      .catch((err) => {
        this.cargando = false;
        console.log(err)
      })
  }
  */



}
