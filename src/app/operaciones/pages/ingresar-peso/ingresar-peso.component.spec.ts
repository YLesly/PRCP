import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPesoComponent } from './ingresar-peso.component';

describe('IngresarPesoComponent', () => {
  let component: IngresarPesoComponent;
  let fixture: ComponentFixture<IngresarPesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarPesoComponent]
    });
    fixture = TestBed.createComponent(IngresarPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
