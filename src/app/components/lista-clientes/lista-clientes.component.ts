import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente/cliente.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente/clientes.service';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatStepperModule, 
    MatButtonModule, 
    BrowserAnimationsModule // Keep this if you need animations
  ],
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteFormGroup!: FormGroup;
  usuarioFormGroup!: FormGroup;
  isModalOpen: boolean = false;
  isModalEdit: boolean = false;

  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data) => {
      this.clientes = data;
    });

    // Inicializar los formularios reactivos
    this.clienteFormGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required]
    });

    this.usuarioFormGroup = this.formBuilder.group({
      id: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
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
    if (this.clienteFormGroup.valid && this.usuarioFormGroup.valid) {
      const clienteData = this.clienteFormGroup.value;
      const usuarioData = this.usuarioFormGroup.value;

      if (this.isModalEdit) {
        // Actualizar cliente
        this.clienteService.updateCliente({ ...clienteData, ...usuarioData }).subscribe(
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
        this.clienteService.saveCliente({ ...clienteData, ...usuarioData }).subscribe(
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
  }

  openModal(editMode: boolean = false, cliente?: Cliente) {
    this.isModalEdit = editMode;

    if (editMode && cliente) {
      this.clienteFormGroup.patchValue({
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        dni: cliente.dni,
        telefono: cliente.telefono,
        direccion: cliente.direccion,
      });

      this.usuarioFormGroup.patchValue({
        id: cliente.id,
        username: cliente.usuario?.username,
        password: '', // Mantener en blanco por seguridad
        email: cliente.usuario?.email,
        role: cliente.usuario?.role,
      });
    } else {
      this.clienteFormGroup.reset();
      this.usuarioFormGroup.reset();
    }

    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
