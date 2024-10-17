import { TipoVehiculo } from "../tipoVehiculo/tipo-vehiculo.model";

export class Vehiculo {
    public id?: string;
    public placa: string;
    public marca: string;
    public modelo: string;
    public anio: number;
    public color: string;
    public infoExtra: string;
    public tipoVehiculo: TipoVehiculo;

    constructor(data: Partial<Vehiculo>) {
        this.id = data.id; 
        this.placa = data.placa || '';
        this.marca = data.marca || '';
        this.modelo = data.modelo || '';
        this.anio = data.anio || 0;
        this.color = data.color || '';
        this.infoExtra = data.infoExtra || '';
        this.tipoVehiculo = data.tipoVehiculo || new TipoVehiculo('', '');
    }
}
