import { TestBed } from '@angular/core/testing';

import { ServicioClienteVehiculoService } from './servicio-cliente-vehiculo.service';

describe('ServicioClienteVehiculoService', () => {
  let service: ServicioClienteVehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioClienteVehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
