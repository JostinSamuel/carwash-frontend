import { Routes } from '@angular/router';
import { ListaServiciosComponent } from './components/lista-servicios/lista-servicios.component';
import { ListaVehiculosComponent } from './components/lista-vehiculos/lista-vehiculos.component';

export const routes: Routes = [
    { path: 'vehiculos', component: ListaVehiculosComponent },
    { path: 'servicios', component: ListaServiciosComponent }
];
