import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesOpinionesComponent } from './coches-opiniones.component';

describe('CochesOpinionesComponent', () => {
  let component: CochesOpinionesComponent;
  let fixture: ComponentFixture<CochesOpinionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesOpinionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesOpinionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
