import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios/servicios.service';
import { Servicio } from '../../models/servicio/servicio.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-servicios.component.html',
  styleUrl: './lista-servicios.component.css'
})
export class ListaServiciosComponent implements OnInit{
  
    servicios: Servicio[] = []; // Initialize the "servicios" property
    
    constructor(private serviciosService: ServiciosService) { }


    ngOnInit(): void {
      this.serviciosService.getServicios().subscribe(data => {
        console.log(data); // Imprime los datos en la consola
        this.servicios = data;
      });
    }
}
