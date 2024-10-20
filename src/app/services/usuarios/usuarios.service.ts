import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario, UsuarioInterface } from '../../models/usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private API_URL = 'http://localhost:8080/api/usuarios'
  constructor(
    private http: HttpClient
  ) { }

  saveUser(usuario : UsuarioInterface): Observable<UsuarioInterface>{
    return this.http.post<UsuarioInterface>(`${this.API_URL}/registrar`, usuario);
  }

}
