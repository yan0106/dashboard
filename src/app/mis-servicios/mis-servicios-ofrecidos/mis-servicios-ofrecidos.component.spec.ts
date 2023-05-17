import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisServiciosOfrecidosComponent } from './mis-servicios-ofrecidos.component';

describe('MisServiciosOfrecidosComponent', () => {
  let component: MisServiciosOfrecidosComponent;
  let fixture: ComponentFixture<MisServiciosOfrecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisServiciosOfrecidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisServiciosOfrecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
