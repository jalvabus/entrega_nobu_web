import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-alerta',
  templateUrl: './detalle-alerta.component.html',
  styleUrls: ['./detalle-alerta.component.css']
})
export class DetalleAlertaComponent implements OnInit {

  id: any = '';

  constructor(private route: ActivatedRoute) { 
    this.getAlerta();
  }


  getAlerta() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        console.log(this.id);
      }
    })
  }

  ngOnInit() {
  }

}
