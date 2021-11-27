import { TestBed } from '@angular/core/testing';

import { EquipamientoService } from './equipamiento.service';

describe('EquipamientoService', () => {
  let service: EquipamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
