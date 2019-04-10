import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import CONFIG from '../../config';
import sendToken from '../../../app/auth.interceptor';

@Injectable()
export class VulcanoService {

  constructor(public http: Http) { }

  getVulcano() {
    let token = window.localStorage.getItem('token');
    return new Promise((resolve, reject) => {
      this.http.post(CONFIG.API + 'vulcano/fetchVulcano', { token: token }, sendToken())
        .subscribe((vulcano) => {
          resolve(vulcano.json());
        },
          (err) => { reject(err) })
    })
  }

  getVulcanoByID(vulcano) {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'vulcano/getByID/' + vulcano, sendToken())
        .subscribe((response) => {
          resolve(response.json());
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  getVulcanos() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'vulcano', sendToken())
        .subscribe((response) => {
          resolve(response.json());
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  getVulcanosByGuardia(guardia) {
    console.log(guardia);
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'vulcano/getByGuardia/' + guardia._id, sendToken())
        .subscribe((response) => {
          resolve(response.json());
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  deleteVulcano(vulcano: any) {
    return new Promise((resolve, reject) => {
      this.http.delete(CONFIG.API + 'vulcano/' + vulcano._id, sendToken())
        .subscribe(response => {
          resolve(response.json());
        }, err => {
          reject(err);
        })
    })
  }

  createVulcano(vulcano) {
    return new Promise((resolve, reject) => {
      this.http.post(CONFIG.API + 'vulcano', vulcano, sendToken())
        .subscribe(response => {
          resolve(response.json());
        }, err => {
          reject(err);
        })
    })
  }

  updateVulcano(vulcano) {
    return new Promise((resolve, reject) => {
      this.http.put(CONFIG.API + 'vulcano/' + vulcano._id, vulcano, sendToken())
        .subscribe(response => {
          resolve(response.json());
        }, err => {
          reject(err);
        })
    })
  }

  validateAsistencia(vulcano) {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'pase-lista/validateAsistencia/' + vulcano._id, sendToken())
      .subscribe((response: any) => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  obtenerUnidadVulcano(vulcano) {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'vulcano/obtenerUnidadVulcano/' + vulcano._id, sendToken())
      .subscribe((response: any) => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  obtnerVulcanoMandoUnidad(unidad) {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'vulcano/obtnerVulcanoMandoUnidad/' + unidad._id, sendToken())
      .subscribe((response: any) => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  obtnercomisionVulcano(vulcano) {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'asignacion-comision/asignacionUsuario/' + vulcano._id, sendToken())
      .subscribe((response: any) => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }
} 
