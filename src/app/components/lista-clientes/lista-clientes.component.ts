import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente/cliente.model';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente/clientes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule 
  ],
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  isModalOpen: boolean = false;
  isModalEdit: boolean = false;

  newCliente: Cliente = new Cliente({     
    nombre: '',
    apellido: '',
    dni: '',
    direccion: '',
    telefono: '',
    email: ''
  });

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data) => {
      this.clientes = data;
    });
  }

  clienteSelected(id: any) {
    const confirmDelete = confirm('Se eliminará el cliente');
    if (confirmDelete) {
      this.clienteService.deleteCliente(id).subscribe(
        () => {
          this.clientes = this.clientes.filter((cliente) => cliente.id !== id);
        },
        (error) => {
          console.error('Error al eliminar', error);
        }
      );
    }
  }

  saveCliente() {
    if (this.isModalEdit) {
      // Actualizar cliente
      this.clienteService.updateCliente(this.newCliente).subscribe(
        (response) => {
          const index = this.clientes.findIndex((x) => x.id === response.id);
          if (index !== -1) {
            this.clientes[index] = response;
          }
          this.closeModal();
        },
        (error) => {
          console.error('Error al actualizar:', error);
        }
      );
    } else {
      // Crear nuevo cliente
      this.clienteService.saveCliente(this.newCliente).subscribe(
        (response) => {
          this.clientes.push(response);
          this.closeModal();
        },
        (error) => {
          console.error('Error al crear:', error);
        }
      );
    }
  
  }

  openModal(editMode: boolean = false, cliente?: Cliente) {
    this.isModalEdit = editMode;

    if (editMode && cliente) {
      this.newCliente = new Cliente({ ...cliente });
      console.log('Cliente a editar:', this.newCliente);
    } else {
      this.newCliente = new Cliente({
        nombre: '',
        apellido: '',
        dni: '',
        direccion: '',
        telefono: '',
        email:''
      });
    }
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
