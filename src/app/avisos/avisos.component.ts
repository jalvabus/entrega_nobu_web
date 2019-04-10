import { Component, OnInit } from '@angular/core';

import { AvisosService, VulcanoService } from '../services/index.services';

import swal from 'sweetalert2'

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {

  avisos: any = [];
  avisosHoy = [];
  form: any = {};
  avisoUpdate: any = {};

  vulcano: any = {};

  constructor(
    public avisosService: AvisosService,
    public vulcanoService: VulcanoService
  ) {
    this.obtenerVulcano();
    this.obtenerAvisosHoy();
  }

  obtenerVulcano() {
    this.vulcanoService.getVulcano()
      .then((usuario: any) => {
        this.vulcano = usuario;
      })
  }

  obtenerAvisosHoy() {
    this.avisosService.getAvisosHoy()
      .then((response: any) => {
        console.log(response);
        this.avisosHoy = response;
      })
  }

  registrarAviso() {
    this.form.administrador = this.vulcano._id;
    this.avisosService.createAviso(this.form)
      .then(response => {
        swal.fire(
          'Aviso creado !',
          'La comision ha sido registrada con éxito',
          'success'
        )
        this.form = {};
        this.avisosHoy.push(response);
      }, err => {
        console.log(err);
      })
  }

  seleccionarAviso(aviso: any) {
    this.avisoUpdate = aviso;
  }

  eliminarAviso(aviso: any) {
    swal.fire({
      title: '¿Estás seguro/a de eliminar el aviso ' + aviso.aviso + '?',
      text: "",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.value) {
        this.avisosService.deleteAviso(aviso)
          .then(response => {
            swal.fire(
              'Aviso eliminado con éxito!',
              'El aviso ha sido borrado con éxito',
              'success'
            )
            this.obtenerAvisosHoy();
          }, err => {
            console.log('Error ' + err)
          })
      }
    })
  }

  actualizarAviso() {
    this.avisosService.updateAviso(this.avisoUpdate)
    .then((response: any) => {
      swal.fire(
        'Aviso actualizado!',
        'El aviso ha sido actualizado con éxito',
        'success'
      )
      this.obtenerAvisosHoy();
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {
  }

}
