import { Usuario } from "../usuario/usuario.model";

export class Cliente {

    public id?: string;
    public nombre: string;
    public apellido: string;
    public dni: string;
    public telefono: string;
    public direccion: string;
    public usuario?: Usuario;


    constructor(data: Partial<Cliente>){
        this.id = data.id
        this.nombre = data.nombre || '';
        this.apellido = data.apellido || '';
        this.dni = data.dni || '';
        this.telefono = data.telefono || '';
        this.direccion = data.direccion || '';
        this.usuario = data.usuario ;
    }
}
