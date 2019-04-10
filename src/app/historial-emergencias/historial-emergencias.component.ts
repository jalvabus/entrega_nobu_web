import { Component, OnInit } from '@angular/core';
import { PartesService } from '../services/index.services';

@Component({
  selector: 'app-historial-emergencias',
  templateUrl: './historial-emergencias.component.html',
  styleUrls: ['./historial-emergencias.component.css']
})
export class HistorialEmergenciasComponent implements OnInit {

  partes = [];
  cargando = false;

  constructor(
    public partesService: PartesService
  ) {
    this.obtenerTodos();

  }

  cargar() {
    this.obtenerTodos();
  }

  obtenerTodos() {
    this.partesService.verTodos()
      .then((respose: any) => {
        console.log(respose);
        this.partes = respose;
      })
  }

  verReporte(reporte: any) {
    this.cargando = true;
    this.partesService.verReporte(reporte)
      .then((file: any) => {
        console.log(file)
        window.open(file.url, '_blank')
        this.cargando = false;
      })
      .catch((err) => {
        console.log(err)
      })
  }

  ngOnInit() {
  }

}
