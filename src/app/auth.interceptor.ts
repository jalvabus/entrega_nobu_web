import { Headers, RequestOptions } from '@angular/http';

export default function () {

    let token = window.localStorage.getItem('token')
    if (token) {
        let headers = new Headers({
            'Authorization': 'bearer ' + token
        });
        return new RequestOptions({ headers: headers });
    } else {
        console.log("NO hay cabeceras")
        return new RequestOptions({});
    }
}