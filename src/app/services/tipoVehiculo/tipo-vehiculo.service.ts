import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoVehiculo } from '../../models/tipoVehiculo/tipo-vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {

  baseUrl: string = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  public getServicios(): Observable<TipoVehiculo[]> {
    return this.httpClient.get<TipoVehiculo[]>( this.baseUrl + "tipoVehiculo" );
  }
}
