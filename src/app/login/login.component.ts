import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, VulcanoService, GuardiasService } from '../services/index.services';

import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  cargando: boolean = false;

  guardiaDelDia: any = {};

  constructor(
    public vulcanoService: VulcanoService,
    public loginService: LoginService,
    public guardiasService: GuardiasService,
    public router: Router) { 
      this.obtenerGuardiaHoy();
    }

  login() {
    this.cargando = true;
    this.loginService.doLogin(this.form)
      .then((token) => {

        this.vulcanoService.getVulcano()
          .then((usuario: any) => {
            this.cargando = false;
            if (usuario.rol === 'vulcano') {
              //this.router.navigate(['/vulcano'])
              this.validateGuardia(usuario);
            } else if (usuario.rol === 'jefe-estacion') {
              this.router.navigate(['/jefe-estacion'])
            } else if (usuario.rol === 'jefe-servicio') {
              this.router.navigate(['/jefe-servicio'])
            }
          })


      })
      .catch((err) => {
        this.cargando = false;
        swal.fire(
          'Algo salió mal...',
          'Usuario o contraseña incorrecta',
          'error'
        )
      })
  }

  obtenerGuardiaHoy() {
    this.guardiasService.getGuardiaDia()
      .then((guardia: any) => {
        this.guardiaDelDia = guardia;
      })
  }

  validateGuardia(vulcano: any) {
    console.log(vulcano);
    console.log(this.guardiaDelDia);
    if (vulcano.guardia.guardia === this.guardiaDelDia.guardia) {
      this.validateAsistencia(vulcano);
    } else {
      swal.fire(
        'Guardia Incorrecta!!',
        'Hoy no es su guardia.',
        'error'
      )
    }
  }

  validateAsistencia(vulcano: any) {
    this.vulcanoService.validateAsistencia(vulcano)
    .then((response: any) => {
      console.log(response);
      if (!response.asistencia) {
        swal.fire(
          'No tiene asistencia!!',
          'Tiene que pasar lista para ingresar',
          'error'
        )
      } else {
        this.router.navigate(['/vulcano'])
      }
    })
  }

  logout() {
    window.localStorage.clear();
    this.router.navigate(['/login'])
  }

  enterLogin(event: any) {
    if (event.keyCode == 13) {
      this.login();
    }
  }

  ngOnInit() {
  }

}
