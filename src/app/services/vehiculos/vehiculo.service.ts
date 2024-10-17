import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../../models/vehiculo/vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  baseUrl: string = 'http://localhost:8080/api/vehiculos';

  constructor(private httpClient: HttpClient) {}

  public getServicios(): Observable<Vehiculo[]> {
    return this.httpClient.get<Vehiculo[]>( this.baseUrl );
  }

  public deleteVehicle(id: any): Observable<Vehiculo>{
    return this.httpClient.delete<any>(this.baseUrl + `/eliminar/${id}`)
  }

  public saveVehicle(vehicle: Vehiculo): Observable<Vehiculo>{
    return this.httpClient.post<Vehiculo>(`${this.baseUrl}/registrar`, vehicle )
  }

  public updateVehicles(vehicle: Vehiculo): Observable<Vehiculo>{
    return this.httpClient.put<Vehiculo>(`${this.baseUrl}/actualizar/${vehicle.id}`, vehicle )
  } 
}
