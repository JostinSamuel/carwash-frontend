import { Usuario } from "../usuario/usuario.model";

export class Cliente {

    public id: string;
    public nombre: string;
    public apellido: string;
    public dni: string;
    public telefono: string;
    public direccion: string;
    public usuario: Usuario;

    constructor(id: string, nombre: string, apellido: string, dni: string, telefono: string, direccion: string, usuario: Usuario) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.telefono = telefono;
        this.direccion = direccion;
        this.usuario = usuario;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getDni(): string {
        return this.dni;
    }

    public setDni(dni: string): void {
        this.dni = dni;
    }

    public getTelefono(): string {
        return this.telefono;
    }

    public setTelefono(telefono: string): void {
        this.telefono = telefono;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getUsuario(): Usuario {
        return this.usuario;
    }

    public setUsuario(usuario: Usuario): void {
        this.usuario = usuario;
    }

}
