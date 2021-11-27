import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamientosComponent } from './equipamientos.component';

describe('EquipamientosComponent', () => {
  let component: EquipamientosComponent;
  let fixture: ComponentFixture<EquipamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
