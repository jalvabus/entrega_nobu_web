import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  vulcano: any = {};
  constructor() { 
    this.vulcano = JSON.parse(window.localStorage.getItem('vulcano'));
  }

  ngOnInit() {
  }

}
