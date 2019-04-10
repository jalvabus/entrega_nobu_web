import { Component, OnInit } from '@angular/core';

import { GradosService } from '../services/index.services';

import swal from 'sweetalert2'

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent implements OnInit {

  grados: any = [{}];
  form: any = {};
  gradoUpdate: any = {};

  constructor(
    private gradosService: GradosService
  ) {
    this.obtenerGrados();
    this.form = {
      grado: ''
    }


  }

  obtenerGrados() {
    this.gradosService.getGrados().then((grados: any) => {
      this.grados = grados;
      console.log(grados);
    }).catch(err => {
      console.log('Error getGrados():' + err);
    })
  }

  registrarGrado() {
    this.gradosService.createGrado(this.form)
      .then((response: any) => {
        swal.fire(
          'Grado creado con éxito!',
          'El grado ha sido registrado con éxito',
          'success'
        )
        this.form.grado = '';
        this.grados.push(response.grado);
      })
  }

  seleccionarGrado(grado: any) {
    this.gradoUpdate = grado;
  }

  actualizarGrado() {
    this.gradosService.updateGrado(this.gradoUpdate)
      .then((response: any) => {
        swal.fire(
          response.mensaje,
          'El grado ha sido registrado con éxito',
          'success'
        )
        this.gradoUpdate.grado = '';
        this.obtenerGrados();
      }, err => {
        console.log("ERRO: " + err)
      })
  }

  elminarGrado(grado: any) {
    swal.fire({
      title: '¿Estás seguro/a de eliminar la grado ' + grado.grado + '?',
      text: "",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.value) {
        this.gradosService.deleteGrado(grado)
          .then((response: any) => {
            swal.fire(
              response.mensaje,
              'El grado ha sido borrado con éxito',
              'success'
            )
            this.obtenerGrados();
          }, err => {
            console.log('Error ' + err)
          })
      }
    })
  }

  ngOnInit() {
  }
}
