import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesListaComponent } from './coches-lista.component';

describe('CochesListaComponent', () => {
  let component: CochesListaComponent;
  let fixture: ComponentFixture<CochesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
