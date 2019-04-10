import { Injectable } from '@angular/core';

import { Http, Headers, Response, Request } from '@angular/http';
import CONFIG from '../../config';
import sendToken from '../../../app/auth.interceptor';

@Injectable()
export class AvisosService {

  constructor(public http: Http) { }

  createAviso(body) {
    return new Promise((resolve, reject) => {
      this.http.post(CONFIG.API + 'aviso', body, sendToken())
        .subscribe(avisos => {
          resolve(avisos.json());
        }, err => {
          reject(err);
        })
    })
  }

  getAvisos() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'aviso', sendToken())
      .subscribe(avisos => {
        resolve(avisos.json());
      }, err => {
        reject(err);
      })
    })
  }

  getAvisosHoy() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'aviso/avisosHoy', sendToken())
      .subscribe(avisos => {
        resolve(avisos.json());
      }, err => {
        reject(err);
      })
    })
  }

  deleteAviso(aviso: any) {
    return new Promise((resolve, reject) => {
      this.http.delete(CONFIG.API + 'aviso/' + aviso._id, sendToken())
      .subscribe(avisos => {
        resolve(avisos.json());
      }, err => {
        reject(err);
      })
    })
  }

  updateAviso(aviso: any) {
    return new Promise((resolve, reject) => {
      this.http.put(CONFIG.API + 'aviso' + aviso._id, aviso, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }
}
