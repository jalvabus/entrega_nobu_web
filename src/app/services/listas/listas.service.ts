import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import CONFIG from '../../config';
import sendToken from '../../../app/auth.interceptor';

@Injectable()
export class ListasService {

  constructor(public http: Http) { }

  getListas() {
    return new Promise((resolve, reject)=>{
      this.http.get(CONFIG.API + 'pase-lista', sendToken())
      .subscribe(response => {
        resolve(response.json());
      },err => {
        reject(err);
      })
    })
  }

  getAsistenciasHoy() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API  + 'pase-lista/getAsistenciasHoy', sendToken())
      .subscribe((response: any)=> {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  paseLista(vulcano) {
    return new Promise((resolve, reject)=>{
      this.http.post(CONFIG.API + 'pase-lista/pase', vulcano, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  getListaHoy() {
    return new Promise((resolve, reject)=>{
      this.http.get(CONFIG.API + 'pase-lista/hoy', sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

}
