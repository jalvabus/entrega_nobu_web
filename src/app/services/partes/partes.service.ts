import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import CONFIG from '../../config';
import sendToken from '../../../app/auth.interceptor';
@Injectable()
export class PartesService {

  constructor(public http: Http) { }

  verTodos() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'parte/getAll', sendToken())
        .subscribe((data) => {
          resolve(data.json())
        }, (err) => {
          console.log(err)
          reject(err)
        })
    })
  }

  verReporte(reporte) {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'parte/verReporte/' + reporte._id, sendToken())
        .subscribe((pdf) => {
          console.log(pdf);
          resolve(pdf)
        }, (err) => {
          console.log(err)
          reject(err)
        })
    })
  }

  generarReporte(data) {
    return new Promise((resolve, reject) => {
      this.http.post(CONFIG.API + 'parte', data, sendToken())
        .subscribe((pdf) => {
          console.log(pdf);
          resolve(pdf)
        }, (err) => {
          console.log(err)
          reject(err)
        })
    })
  }

}
