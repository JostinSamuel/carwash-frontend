import { Component } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo/vehiculo.model';
import { VehiculoService } from '../../services/vehiculos/vehiculo.service';
import { CommonModule } from '@angular/common';
import { TipoVehiculo } from '../../models/tipoVehiculo/tipo-vehiculo.model';
import { FormsModule } from '@angular/forms'
import { TipoVehiculoService } from '../../services/tipoVehiculo/tipo-vehiculo.service';

@Component({
  selector: 'app-lista-vehiculos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-vehiculos.component.html',
  styleUrl: './lista-vehiculos.component.css'
})

export class ListaVehiculosComponent {
  vehiculos: Vehiculo[] = [];
  tipoVehicles : TipoVehiculo[] = []
  newVehiculo: Vehiculo = new Vehiculo({     
    placa: '',
    marca: '',
    modelo: '',
    anio: 0,
    color: '',
    infoExtra: '',
    tipoVehiculo: new TipoVehiculo('', '')});
  vehicleSelectAt : any;
  isModalOpen:any =  false;
  isModalEdit:boolean = false;


  constructor(private vehiculosService: VehiculoService, private typeVehicleService : TipoVehiculoService) {

   }

  ngOnInit(): void {
    this.vehiculosService.getServicios().subscribe(data => {
      console.log(data); 
      this.vehiculos = data;
    });

    this.typeVehicleService.getServicios().subscribe(types => {
      this.tipoVehicles= types
      console.log("this.tipoVehicles", this.tipoVehicles);
      
    })
  }

  vehicleSelected(id: any){
    this.vehicleSelectAt = id
    let confirmDelete = confirm("Se eliminará el vehiculo");
    if (confirmDelete) {
      this.vehiculosService.deleteVehicle(this.vehicleSelectAt).subscribe(
        (response) => {
        this.vehiculos = this.vehiculos.filter(vehiculo => vehiculo.id !== id);
        console.log("Vehiculo eliminado ", this.vehicleSelectAt);
      },(error) => {
        console.error("Error al eliminar", error);        
      }
    )}
  }
  
  saveVehicle() {
    console.log("Vehiculo a guardar:", this.newVehiculo); // Para debugging
  
    if (this.isModalEdit) {
      // Enviar el objeto completo, incluyendo el `id`, al actualizar un vehículo existente
      this.vehiculosService.updateVehicles(this.newVehiculo).subscribe(
        (response) => {
          const index = this.vehiculos.findIndex(x => x.id === this.newVehiculo.id);
          if (index !== -1) {
            this.vehiculos[index] = response;
          }
          console.log("Vehículo actualizado:", response);
          this.closeModal();
        },
        (error) => {
          console.error("Error al actualizar:", error);
        }
      );
    } else {
      this.vehiculosService.saveVehicle(this.newVehiculo).subscribe(
        (response: Vehiculo) => {
          this.vehiculos.push(response); // El backend nos devuelve el vehículo con el `id`
          console.log("Vehículo creado:", response);
          this.closeModal();
        },
        (error) => {
          console.error("Error al crear:", error);
        }
      );
    }
  }

  openModal(editMode: boolean = false, vehiculo?: Vehiculo) {
    this.isModalEdit = editMode;
    if (editMode && vehiculo) {
      // Si está en modo de edición, cargar los datos del vehículo
      this.newVehiculo = new Vehiculo({...vehiculo});    
      const selectedTipoVehiculo = this.tipoVehicles.find(tipo => tipo.id === vehiculo.tipoVehiculo.id);
      if (selectedTipoVehiculo) {
        this.newVehiculo.tipoVehiculo = selectedTipoVehiculo;
      }

    } else {
      // Si es un nuevo vehículo, reiniciar el formulario
      this.newVehiculo = new Vehiculo({
        placa: '',
        marca: '',
        modelo: '',
        anio: 0,
        color: '',
        infoExtra: '',
        tipoVehiculo: new TipoVehiculo('', '') // O el valor predeterminado que uses
      });    
    }
    this.isModalOpen = true;
  }
  

  closeModal(){
    this.isModalOpen = false
  }

}
