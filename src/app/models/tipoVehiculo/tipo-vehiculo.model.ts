export class TipoVehiculo {

    public id: string;
    public tipoVehiculo: string;

    constructor(id: string, tipoVehiculo: string) {
        this.id = id;
        this.tipoVehiculo = tipoVehiculo;
    }

    //getters and setters
    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getTipoVehiculo(): string {
        return this.tipoVehiculo;
    }

    public setTipoVehiculo(tipoVehiculo: string): void {
        this.tipoVehiculo = tipoVehiculo;
    }

}
