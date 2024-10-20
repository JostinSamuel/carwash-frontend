import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../../models/cliente/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080/api/clientes'; // URL de la API

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  saveCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<any>(`${this.apiUrl}/registrar`, cliente);
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}/actualizar/${cliente.id}`, cliente);
  }

  deleteCliente(id: string): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.apiUrl}/eliminar/${id}`);
  }
}
