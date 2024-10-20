import { Routes } from '@angular/router';
import { ListaServiciosComponent } from './components/lista-servicios/lista-servicios.component';
import { ListaVehiculosComponent } from './components/lista-vehiculos/lista-vehiculos.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login-components/register/register.component';
import { RecoverPassComponent } from './components/login-components/recover-pass/recover-pass.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverPassComponent },
    { path: 'vehiculos', component: ListaVehiculosComponent },
    { path: 'servicios', component: ListaServiciosComponent },
    { path: 'clientes', component: ListaClientesComponent }
];

