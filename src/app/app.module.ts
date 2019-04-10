import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuardiasComponent } from './guardias/guardias.component';
import { EstacionesComponent } from './estaciones/estaciones.component';
import { GradosComponent } from './grados/grados.component';
import { MandosComponent } from './mandos/mandos.component';
import { UnidadesComponent } from './unidades/unidades.component';

// Services
import {
  EstacionesService,
  GradosService,
  GuardiasService,
  MandosService,
  UnidadesService,
  LoginService,
  VulcanoService,
  AlertaService,
  ListasService,
  PartesService,
  ComisionesService,
  AvisosService
} from './services/index.services';

import CONFIG from './config';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthServiceService } from './services/auth-service.service';
import { LayoutComponent } from './layout/layout.component';
import { VulcanosComponent } from './vulcanos/vulcanos.component';
import { PaseListaComponent } from './pase-lista/pase-lista.component';
import { AsignacionUnidadComponent } from './asignacion-unidad/asignacion-unidad.component';
import { EstacionMandosComponent } from './estacion-mandos/estacion-mandos.component';
import { AlertasComponent } from './alertas/alertas.component';
import { AsignarComisionesComponent } from './asignar-comisiones/asignar-comisiones.component';
import { InicioVulcanoComponent } from './inicio-vulcano/inicio-vulcano.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InicioJefeServicioComponent } from './inicio-jefe-servicio/inicio-jefe-servicio.component';
import { HistorialEmergenciasComponent } from './historial-emergencias/historial-emergencias.component';
import { ParteInformativoComponent } from './parte-informativo/parte-informativo.component';
import { AvisosComponent } from './avisos/avisos.component';
import { DetalleAlertaComponent } from './detalle-alerta/detalle-alerta.component';
import { ComisionesComponent } from './comisiones/comisiones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    GuardiasComponent,
    EstacionesComponent,
    GradosComponent,
    MandosComponent,
    UnidadesComponent,
    LayoutComponent,
    VulcanosComponent,
    PaseListaComponent,
    AsignacionUnidadComponent,
    EstacionMandosComponent,
    AlertasComponent,
    AsignarComisionesComponent,
    InicioVulcanoComponent,
    PerfilComponent,
    InicioJefeServicioComponent,
    HistorialEmergenciasComponent,
    ParteInformativoComponent,
    AvisosComponent,
    DetalleAlertaComponent,
    ComisionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    EstacionesService,
    GradosService,
    GuardiasService,
    MandosService,
    UnidadesService,
    LoginService,
    VulcanoService,
    AuthGuardService,
    AuthServiceService,
    AlertaService,
    ListasService,
    PartesService,
    ComisionesService,
    AvisosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
