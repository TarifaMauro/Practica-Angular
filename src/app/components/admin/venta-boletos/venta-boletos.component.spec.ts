import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaBoletosComponent } from './venta-boletos.component';

describe('VentaBoletosComponent', () => {
  let component: VentaBoletosComponent;
  let fixture: ComponentFixture<VentaBoletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentaBoletosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
