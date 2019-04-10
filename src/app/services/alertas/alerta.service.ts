import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import * as io from 'socket.io-client';

import { Http, Headers, Response, Request } from '@angular/http';
import CONFIG from '../../config';
import sendToken from '../../../app/auth.interceptor';

@Injectable()
export class AlertaService {
  private url = 'http://207.38.94.126:25808';
  private socket;

  constructor(public http: Http) {

  }

  getAlertas() {
    return new Promise((resolve, reject) => {
      this.http.get(CONFIG.API + 'notificacion')
        .subscribe(response => {
          resolve(response.json());
        }, err => {
          reject(err);
        })
    })

  }

  // HANDLER
  onNewMessage() {
    /*
    return new Promise((resolve, reject) => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        console.log(data);
        resolve(data.json());
      });
    })
    
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        console.log(data);
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
    */

  }

}
