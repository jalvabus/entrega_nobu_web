import { Component, OnInit } from '@angular/core';
import { AlertaService } from '../services/index.services';
declare var google: any;
@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})

export class AlertasComponent implements OnInit {

  alertas: any = [];

  lat: number;
  lng: number;

  placeInfoWindow: any;
  map: any;
  marker: any;

  constructor(
    public alertaService: AlertaService
  ) {
    this.obtenerAlertas();
  }

  atenderAlerta(alerta: any) {

    this.lat = Number(alerta.ubicacion.latitud);
    this.lng = Number(alerta.ubicacion.longitud);

    this.map = new google.maps.Map(document.getElementById('gmap'), {
      center: { lat: this.lat, lng: this.lng },
      zoom: 15
    });

    this.placeInfoWindow = new google.maps.InfoWindow();

    this.marker = new google.maps.Marker({
      map: this.map,
      draggable: false,
      position: new google.maps.LatLng(this.lat, this.lng),
      animation: google.maps.Animation.DROP
    });

    this.marker.addListener('click', this.toggleBounce);
    
  }

  toggleBounce() {
    if (this.marker.getAnimation() !== null) {
      this.marker.setAnimation(null);
    } else {
      this.marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  obtenerAlertas() {
    this.alertaService.getAlertas()
      .then((alertas) => {
        console.log(alertas);
        this.alertas = alertas;
      })
  }

  recursividad() {
    setTimeout(() => {
      this.obtenerAlertas();
      this.recursividad();
    }, 3000);
  }

  ngOnInitNew() {
    this.map = new google.maps.Map(document.getElementById('gmap'), {
      center: { lat: -33.866, lng: 151.196 },
      zoom: 15
    });

    this.placeInfoWindow = new google.maps.InfoWindow();

    const marker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(-33.866, 151.196)
    });

  }

  ngOnInit() {
    //this.recursividad();
    /*
    this.alertaService.onNewMessage()
      .subscribe((mensaje: any) => {
        console.log('nuevaAlertas')
        this.alertas.push(mensaje);
        console.log(mensaje);
      })
      */
  }

}
