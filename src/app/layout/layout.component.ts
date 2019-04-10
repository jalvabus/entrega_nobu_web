import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import swal from 'sweetalert2';
import { VulcanoService, AlertaService } from '../services/index.services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  vulcano: any = {};
  alertas: any = [];

  notificacionesTotal: number = 0;

  constructor(
    public router: Router,
    public vulcanoService: VulcanoService,
    public alertaService: AlertaService
  ) {
    this.obtenerVulcano();
  }


  obtenerVulcano() {
    this.vulcanoService.getVulcano()
      .then((usuario: any) => {
        console.log(usuario);
        this.vulcano = usuario;
      })
  }

  logout() {
    window.localStorage.clear();
    this.router.navigate(['/login'])
  }

  obtenerAlertas() {
    this.notificacionesTotal = 0;
    this.alertaService.getAlertas()
      .then((alertas) => {

        this.alertas = alertas;
        this.alertas.forEach((alerta) => {
          if (!alerta.visto) {
            this.notificacionesTotal++;
          }
        })
      })
  }

  recursividad() {
    setTimeout(() => {
      this.obtenerAlertas();
      this.recursividad();
    }, 5000);
  }

  ngOnInit() {
    //this.recursividad();
    /*
    this.alertaService.onNewMessage()
      .subscribe((mensaje: any) => {
        this.totalAlertas++;
        console.log('nuevaAlertas')
        swal.fire(
          'NUEVA ALERTA!!',
          'Se ah recibido una alerta!',
          'warning'
        )
        this.alertas.push(mensaje);
        console.log(this.alertas);
      })
      */
  }

}
