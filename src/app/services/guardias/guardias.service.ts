import { Injectable } from '@angular/core';

import { Http, Headers, Response, Request } from '@angular/http';
import CONFIG from '../../config';
import sendToken from '../../../app/auth.interceptor';

@Injectable()
export class GuardiasService {

  constructor(public http: Http) { }

  getGuardias() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'guardia', sendToken())
        .subscribe((response) => {
          resolve(response.json());
        }, err => {
          console.log('Error getGrados(): ' + err);
          reject(err);
        })
    })
  }

  deleteGuardia(guardia: any) {
    return new Promise ((resolve, reject)=>{
      this.http.delete(CONFIG.API + 'guardia/' + guardia._id, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  createGuardia(guardia) {
    return new Promise((resolve, reject)=>{
      this.http.post(CONFIG.API + 'guardia', guardia, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  updateGuardia(guardia) {
    return new Promise((resolve, reject)=>{
      this.http.put(CONFIG.API + 'guardia/' + guardia._id, guardia, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  getGuardiaDia() {
    var fecha = new Date();
    return new Promise((resolve, reject)=>{
      this.http.get(CONFIG.API + 'getGuardia/' + fecha, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }
}
