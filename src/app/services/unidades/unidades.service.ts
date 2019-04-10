import { Injectable } from '@angular/core';

import { Http, Headers, Response, Request } from '@angular/http';
import CONFIG from '../../config';
import sendToken from '../../../app/auth.interceptor';

@Injectable()
export class UnidadesService {

  constructor(public http: Http) { }

  getUnidades() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'unidad', sendToken())
        .subscribe((response) => {
          resolve(response.json());
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  getUnidadesByGuardia(guardia) {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'unidad/getByGuardia/' + guardia._id, sendToken())
        .subscribe((response) => {
          resolve(response.json());
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  deleteUnidad(unidad: any) {
    return new Promise ((resolve, reject)=>{
      this.http.delete(CONFIG.API + 'unidad/' + unidad._id, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  createUnidad(unidad) {
    return new Promise((resolve, reject)=>{
      this.http.post(CONFIG.API + 'unidad', unidad, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  updateUnidad(unidad) {
    return new Promise((resolve, reject)=>{
      this.http.put(CONFIG.API + 'unidad/' + unidad._id, unidad, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  asignarUnidad(unidad) {
    return new Promise((resolve, reject)=>{
      this.http.post(CONFIG.API + 'asignacion-unidad', unidad, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  eliminarAsignacion(unidad){
    return new Promise((resolve, reject)=>{
      this.http.post(CONFIG.API + 'asignacion-unidad/delete', unidad, sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  getAsignacionesUnidades() {
    return new Promise((resolve, reject)=>{
      this.http.get(CONFIG.API + 'asignacion-unidad', sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }

  getAsignacionesHoy() {
    return new Promise((resolve, reject)=>{
      this.http.get(CONFIG.API + 'asignacion-unidad/getAsignacionHoy', sendToken())
      .subscribe(response => {
        resolve(response.json());
      }, err => {
        reject(err);
      })
    })
  }
}
