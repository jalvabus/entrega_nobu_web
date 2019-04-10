import { Injectable } from '@angular/core';

import { Http, Headers, Response, Request } from '@angular/http';
import CONFIG from '../../config';
import sendToken from '../../../app/auth.interceptor';

@Injectable()
export class MandosService {

  constructor(public http: Http) { }

  /*
  getMandos() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'mando', sendToken())
        .subscribe((response) => {
          resolve(response.json());
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  deleteMando(mando: any) {
    return new Promise ((resolve, reject)=>{
      this.http.delete(CONFIG.API + 'mando/' + mando._id, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  createMando(mando) {
    return new Promise((resolve, reject)=>{
      this.http.post(CONFIG.API + 'mando', mando, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  updateMando(mando) {
    return new Promise((resolve, reject)=>{
      this.http.put(CONFIG.API + 'mando/' + mando._id, mando, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }
  */

  createMandoUnidad(mando) {
    return new Promise((resolve, reject)=>{
      this.http.post(CONFIG.API + 'mando', mando, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  obtenerMandosHoy() {
    return new Promise((resolve, reject)=>{
      this.http.get(CONFIG.API + 'mando/getMandoHoy', sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

}
