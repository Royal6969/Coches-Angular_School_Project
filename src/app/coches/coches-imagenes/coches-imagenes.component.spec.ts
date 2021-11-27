import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesImagenesComponent } from './coches-imagenes.component';

describe('CochesImagenesComponent', () => {
  let component: CochesImagenesComponent;
  let fixture: ComponentFixture<CochesImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
