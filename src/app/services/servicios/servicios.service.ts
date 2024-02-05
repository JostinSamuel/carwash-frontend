import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../../models/servicio/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  baseUrl: string = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  public getServicios(): Observable<Servicio[]> {
    return this.httpClient.get<Servicio[]>( this.baseUrl + "servicios" );
  }
}
