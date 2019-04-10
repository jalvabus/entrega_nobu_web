import { Injectable } from '@angular/core';

import { Http, Headers, Response, Request } from '@angular/http';
import CONFIG from '../../config';
import sendToken from '../../../app/auth.interceptor';

@Injectable()
export class GradosService {

  constructor(public http: Http) { }

  getGrados() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'grado', sendToken())
        .subscribe((response) => {
          resolve(response.json());
        }, err => {
          console.log('Error getGrados(): ' + err);
          reject(err);
        })
    })
  }

  deleteGrado(grado: any) {
    return new Promise ((resolve, reject)=>{
      this.http.delete(CONFIG.API + 'grado/' + grado._id, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  createGrado(grado) {
    return new Promise((resolve, reject)=>{
      this.http.post(CONFIG.API + 'grado', grado, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  updateGrado(grado) {
    return new Promise((resolve, reject)=>{
      this.http.put(CONFIG.API + 'grado/' + grado._id, grado, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }


}
