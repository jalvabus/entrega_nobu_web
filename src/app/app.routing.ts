import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuardiasComponent } from './guardias/guardias.component';
import { EstacionesComponent } from './estaciones/estaciones.component';
import { GradosComponent } from './grados/grados.component';
import { MandosComponent } from './mandos/mandos.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { VulcanosComponent } from './vulcanos/vulcanos.component';
import { PaseListaComponent } from './pase-lista/pase-lista.component';
import { EstacionMandosComponent } from './estacion-mandos/estacion-mandos.component';
import { AsignacionUnidadComponent } from './asignacion-unidad/asignacion-unidad.component';
import { AlertasComponent } from './alertas/alertas.component';
import { AsignarComisionesComponent } from './asignar-comisiones/asignar-comisiones.component';
import { InicioVulcanoComponent } from './inicio-vulcano/inicio-vulcano.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ParteInformativoComponent } from './parte-informativo/parte-informativo.component';
import { HistorialEmergenciasComponent } from './historial-emergencias/historial-emergencias.component';
import { AvisosComponent } from './avisos/avisos.component';
import { DetalleAlertaComponent } from './detalle-alerta/detalle-alerta.component';
import { ComisionesComponent } from './comisiones/comisiones.component';

// Servicio 
import { AuthGuardService } from './services/auth-guard.service';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [

    {
        path: '',
        component: LoginComponent,
        data: {
            title: 'Login'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login'
        }
    },
    {
        path: 'jefe-estacion',
        component: LayoutComponent,
        canActivate: [AuthGuardService],
        data: {
            title: 'Inicio'
        },
        children: [
            {
                path: '',
                component: VulcanosComponent,
            },
            {
                path: 'comisiones',
                component: ComisionesComponent,
            },
            {
                path: 'estaciones',
                component: EstacionesComponent,
            },
            {
                path: 'grados',
                component: GradosComponent,
            },
            {
                path: 'guardias',
                component: GuardiasComponent,
            },
            {
                path: 'mandos',
                component: MandosComponent,
            },
            {
                path: 'unidades',
                component: UnidadesComponent,
            },
            {
                path: 'vulcanos',
                component: VulcanosComponent,
            },
            {
                path: 'alertas',
                component: AlertasComponent
            },
            {
                path: 'detalle-alerta/:id',
                component: DetalleAlertaComponent
            },
            {
                path: 'pase-lista',
                component: PaseListaComponent,
            },
            {
                path: 'asignar-comisiones',
                component: AsignarComisionesComponent
            },
            {
                path: 'perfil',
                component: PerfilComponent
            },
            {
                path: 'avisos',
                component: AvisosComponent
            },
            {
                path: 'historial-emergencias',
                component: HistorialEmergenciasComponent
            }
        ]
    },
    {
        path: 'jefe-servicio',
        component: LayoutComponent,
        canActivate: [AuthGuardService],
        data: {
            title: 'Inicio'
        },
        children: [
            {
                path: 'pase-lista',
                component: PaseListaComponent,
            },
            {
                path: 'asignacion-unidad',
                component: AsignacionUnidadComponent
            },
            {
                path: 'estacion-mandos',
                component: EstacionMandosComponent
            }
        ]
    },
    {
        path: 'vulcano',
        component: LayoutComponent,
        canActivate: [AuthGuardService],
        data: {
            title: 'Inicio'
        },
        children: [
            {
                path: '',
                component: InicioVulcanoComponent,
            },
            {
                path: 'parte-informativo',
                component: ParteInformativoComponent
            },
            {
                path: 'perfil',
                component: PerfilComponent
            },
            {
                path: 'historial-emergencias',
                component: HistorialEmergenciasComponent
            }
        ]
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }