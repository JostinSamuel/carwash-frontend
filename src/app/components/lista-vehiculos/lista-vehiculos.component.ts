import { Component } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo/vehiculo.model';
import { VehiculoService } from '../../services/vehiculos/vehiculo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-vehiculos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-vehiculos.component.html',
  styleUrl: './lista-vehiculos.component.css'
})
export class ListaVehiculosComponent {
  vehiculos: Vehiculo[] = [];
    
  constructor(private vehiculosService: VehiculoService) { }

  ngOnInit(): void {
    this.vehiculosService.getServicios().subscribe(data => {
      console.log(data); 
      this.vehiculos = data;
    });
  }
}
