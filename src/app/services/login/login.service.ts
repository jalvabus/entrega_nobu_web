import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import CONFIG from '../../config';
import sendToken from '../../../app/auth.interceptor';

@Injectable()
export class LoginService {

  constructor(public http: Http) { }

  doLogin(datos) {
    return new Promise((resolve, reject) => {
      this.http.post(CONFIG.API_LOGIN + 'login', datos)
        .subscribe((token) => {
          resolve(this.saveToken(token.json()));
        }, (err) => {
          reject(err);
        })
    })
  }

  saveToken(token) {
    window.localStorage.setItem('token', token);
    this.http.post(CONFIG.API + 'vulcano/fetchVulcano', { token: token }, sendToken())
      .subscribe((vulcano) => {
        window.localStorage.setItem('vulcano',
          JSON.stringify(vulcano.json()));
      },
        (err) => { console.log(err) })
    return token;

  }

}
