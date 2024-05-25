import { TipoVehiculo } from "../tipoVehiculo/tipo-vehiculo.model";

export class Vehiculo {

    public id: string;
    public placa: string;
    public marca: string;
    public modelo: string;
    public anio: number;
    public color: string;
    public infoExtra: string;
    public tipoVehiculo: TipoVehiculo;

    constructor(id: string, placa: string, marca: string, modelo: string, anio: number, color: string, infoExtra: string, tipoVehiculo: TipoVehiculo) {
        this.id = id;
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
        this.infoExtra = infoExtra;
        this.tipoVehiculo = tipoVehiculo;
    }

    //getters and setters
    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getPlaca(): string {
        return this.placa;
    }

    public setPlaca(placa: string): void {
        this.placa = placa;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getAnio(): number {
        return this.anio;
    }

    public setAnio(anio: number): void {
        this.anio = anio;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getInfoExtra(): string {
        return this.infoExtra;
    }

    public setInfoExtra(infoExtra: string): void {
        this.infoExtra = infoExtra;
    }

    public getTipoVehiculo(): TipoVehiculo {
        return this.tipoVehiculo;
    }

    public setTipoVehiculo(tipoVehiculo: TipoVehiculo): void {
        this.tipoVehiculo = tipoVehiculo;
    }
}
