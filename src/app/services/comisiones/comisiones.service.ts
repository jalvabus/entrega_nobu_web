import { Injectable } from '@angular/core';

import { Http, Headers, Response, Request } from '@angular/http';
import CONFIG from '../../config';
import sendToken from '../../../app/auth.interceptor';

@Injectable()
export class ComisionesService {

  constructor(public http: Http) { }

  getComisiones() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'comision', sendToken())
        .subscribe((response) => {
          resolve(response.json());
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  deleteComision(comision: any) {
    return new Promise((resolve, reject) => {
      this.http.delete(CONFIG.API + 'comision/' + comision._id, sendToken())
        .subscribe(response => {
          resolve(response.json());
        }, err => {
          reject(err);
        })
    })
  }

  createComision(comision) {
    return new Promise((resolve, reject) => {
      this.http.post(CONFIG.API + 'comision', comision, sendToken())
        .subscribe(response => {
          resolve(response.json());
        }, err => {
          reject(err);
        })
    })
  }

  updateComision(comision) {
    return new Promise((resolve, reject) => {
      this.http.put(CONFIG.API + 'comision/' + comision._id, comision, sendToken())
        .subscribe(response => {
          resolve(response.json());
        }, err => {
          reject(err);
        })
    })
  }

  getComisionesHoy(){
    return new Promise((resolve, reject)=>{
      this.http.get(CONFIG.API + 'asignacion-comision/getComisionHoy', sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }
  
  createComisionVulcano(comision) {
    return new Promise((resolve, reject) => {
      this.http.post(CONFIG.API + 'asignacion-comision', comision, sendToken())
        .subscribe(response => {
          resolve(response.json());
        }, err => {
          reject(err);
        })
    })
  }
}
