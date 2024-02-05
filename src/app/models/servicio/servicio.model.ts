export class Servicio {
    public id: string;
    public nombre: string;
    public descripcion: string;
    public precio: number;
    public imagen: string;

    constructor(id: string, nombre: string, descripcion: string, precio: number, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
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

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }
}
