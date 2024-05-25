import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../../models/vehiculo/vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  baseUrl: string = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  public getServicios(): Observable<Vehiculo[]> {
    return this.httpClient.get<Vehiculo[]>( this.baseUrl + "vehiculos" );
  }
}
