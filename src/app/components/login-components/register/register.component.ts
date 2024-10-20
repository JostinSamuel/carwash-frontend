import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClienteService } from '../../../services/cliente/clientes.service';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { Usuario } from '../../../models/usuario/usuario.model';
import { Cliente } from '../../../models/cliente/cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  templateUrl: './register.component.html',
  styles: ``,
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit{

  isLinear = false;
  private _formBuilder = inject(FormBuilder);

  userData = this._formBuilder.group({
    username : ['', Validators.required],
    password : ['', Validators.required],
    email : ['', Validators.required],
    role : 'user'
  });

  personalData = this._formBuilder.group({
    nombre : ['', Validators.required],
    apellido : ['', Validators.required],
    dni : ['', Validators.required],
    telefono : ['', Validators.required],
    direccion : ['', Validators.required],
  });

  constructor(
    private usuarioService : UsuariosService,
    private clienteService : ClienteService,
    private route: Router
  ) { 

  }

  ngOnInit(): void {
  }

  dataSerializable (form : any):Usuario {
    return new Usuario(
      {
        username: form.username,
        password: form.password,
        email: form.email,
        role: form.role
      }
    );
  }

  fullUserData(form : any):Cliente{
    return new Cliente ({
      nombre: form.nombre,
      apellido: form.apellido,
      dni: form.dni,
      telefono: form.telefono,
      direccion: form.direccion,
    })
  }
  goBack(){
    this.route.navigate(['/login']);
  }

  saveData(){
    const fullData: any = {
      ...this.fullUserData(this.personalData.value),
      usuario: this.dataSerializable(this.userData.value)
    }

    this.clienteService.saveCliente(fullData).subscribe(
      (data)=>{
      if(data){
        alert('Usuario registrado con éxito');
        this.route.navigate(['/login']);
      }
    })
  }
}
