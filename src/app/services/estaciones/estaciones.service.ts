import { Injectable } from '@angular/core';

import { Http, Headers, Response, Request } from '@angular/http';
import CONFIG from '../../config';
import sendToken from '../../../app/auth.interceptor';

@Injectable()
export class EstacionesService {

  constructor(public http: Http) { }

  getEstaciones() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'estacion', sendToken())
        .subscribe((response) => {
          resolve(response.json());
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  deleteEstacion(estacion: any) {
    return new Promise ((resolve, reject)=>{
      this.http.delete(CONFIG.API + 'estacion/' + estacion._id, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  createEstacion(estacion) {
    return new Promise((resolve, reject)=>{
      this.http.post(CONFIG.API + 'estacion', estacion, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  updateEstacion(estacion) {
    return new Promise((resolve, reject)=>{
      this.http.put(CONFIG.API + 'estacion/' + estacion._id, estacion, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }


}
